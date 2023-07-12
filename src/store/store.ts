import { create } from "zustand";

// FormStore
export const useFormStore = create<FormStore>((set) => ({
  formValues: {},
  setFormField: (fieldName: any, value: any) => {
    set((state: any) => ({
      formValues: {
        ...state.formValues,
        [fieldName]: value,
      },
    }));
  },
}));

// UserStore
export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setIsLoading: (isLoading) => set({isLoading}),
}));

// OutingStore
export const useOutingStore = create<OutingStore>((set) => ({
  outing: null,
  filter: null,
  isLoading: true,
  setOuting: (outing) => set({ outing }),
  setFilter: (filter: Filter | null) => set({ filter }),
  setIsLoading: (isLoading) => set({isLoading}),
}));