import { create } from "zustand";

// ImageStore
type FormStore = {
  formValues: {
    [key: string]: any;
  };
  setFormField: (fieldName: string, value: any) => void;
};

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
type User = {
  email: string;
  gender: string;
  hostel: string;
  mobile: number;
  name: string;
  role: string;
  room: number;
  username: string;
  idCard: string;
  profilePic: string;
};

type UserStore = {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  setIsLoading: (isLoading:boolean) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setIsLoading: (isLoading) => set({isLoading}),
}));
