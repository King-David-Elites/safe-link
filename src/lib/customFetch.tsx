//"use client";
// api/customFetch.ts
import Toast from "react-hot-toast";

type RequestInterceptor = (config: RequestInit) => RequestInit;
type ResponseInterceptor = (response: Response) => Promise<Response>;

class CustomFetch {
  private baseUrl: string;
  private requestInterceptors: RequestInterceptor[];
  private responseInterceptors: ResponseInterceptor[];

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  setGlobalHeaders(headers: HeadersInit): void {
    this.requestInterceptors.push((config) => ({
      ...config,
      headers: { ...config.headers, ...headers },
    }));
  }

  addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor);
  }

  private async runRequestInterceptors(
    config: RequestInit
  ): Promise<RequestInit> {
    let updatedConfig = { ...config };
    for (const interceptor of this.requestInterceptors) {
      updatedConfig = await interceptor(updatedConfig);
    }
    return updatedConfig;
  }

  private async runResponseInterceptors(response: Response): Promise<Response> {
    let updatedResponse = response;
    for (const interceptor of this.responseInterceptors) {
      updatedResponse = await interceptor(updatedResponse);
    }
    return updatedResponse;
  }

  async fetch<T>(url: string, options: RequestInit = {}): Promise<T> {
    const fullUrl = `${this.baseUrl}/${url}`;
    const config = await this.runRequestInterceptors(options);

    try {
      let response = await fetch(fullUrl, config);
      response = await this.runResponseInterceptors(response);

      if (!response.ok) {
        Toast.error("A error occured");
        throw response;
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
}

// Create and export an instance
//console.log("fgg", process.env.NEXT_PUBLIC_BASE_URL);
const customFetch = new CustomFetch(process.env.NEXT_PUBLIC_API_BASE_URL || "");

// Set up global headers
customFetch.setGlobalHeaders({
  "Content-Type": "application/json",
});

// Add a request interceptor for authentication
customFetch.addRequestInterceptor((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }
  return config;
});

export default customFetch;
