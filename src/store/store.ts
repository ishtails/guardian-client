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
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
