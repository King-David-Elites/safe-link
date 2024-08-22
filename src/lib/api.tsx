// api.ts

import toast from "react-hot-toast";

interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  attacks: {
    special: {
      name: string;
      type: string;
      damage: number;
    }[];
  };
  fetchedAt: string;
}

const baseUrl = process.env.BASE_URL;

const addAuthorizationHeader = (headers: any) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
};

const customFetch = async (
  url: string,
  options: RequestInit = {}
): Promise<Pokemon> => {
  const headers = addAuthorizationHeader(options.headers || {});
  const updatedOptions: RequestInit = { ...options, headers };

  try {
    const response = await fetch(`${baseUrl}/${url}`, updatedOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: {
      data?: { pokemon?: Pokemon };
      errors?: { message: string }[];
    } = await response.json();

    if (data.data?.pokemon) {
      const pokemon = data.data.pokemon;
      pokemon.fetchedAt = new Date().toLocaleTimeString();
      return pokemon;
    } else {
      throw new Error(`No pokemon found`);
    }
  } catch (error: any) {
    throw new Error("Network error occurred");
    console.log("error", error.response);
    //toast.error(error.response)
  }
};

export default customFetch;
