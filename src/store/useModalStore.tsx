// useStore.js
import { create } from "zustand";

interface StoreState {
  isLogInModalOpen: boolean;
  isSignUpModalOpen: boolean;
  isDrawerOpen: boolean;
  openLogInModal: () => void;
  closeLogInModal: () => void;
  openSignUpModal: () => void;
  closeSignUpModal: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const useStore = create<StoreState>((set) => ({
  isLogInModalOpen: false,
  isSignUpModalOpen: false,
  isDrawerOpen: false,
  openLogInModal: () => set({ isLogInModalOpen: true }),
  closeLogInModal: () => set({ isLogInModalOpen: false }),
  openSignUpModal: () => set({ isSignUpModalOpen: true }),
  closeSignUpModal: () => set({ isSignUpModalOpen: false }),
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));

export default useStore;
