// userStore.ts

import create from "zustand";

type FavoriteItem = {
  id: string; // Assuming item IDs are strings
  title: string;
  description: string;
  price: number;
  image: string;
};

type ListStore = {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (itemId: string) => void;
  clearFavorites: () => void;
};

const useListStore = create<ListStore>((set) => ({
  favorites: [],
  addToFavorites: (item) =>
    set((state) => ({ favorites: [...state.favorites, item] })),
  removeFromFavorites: (itemId) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== itemId),
    })),
  clearFavorites: () => set({ favorites: [] }),
}));

export default useListStore;
