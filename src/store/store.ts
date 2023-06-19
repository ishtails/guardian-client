import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    username: "",
    active: false,
  },

  setUsername: (name: String) =>
    set((state: any) => ({ auth: { ...state.auth, username: name } })),
}));