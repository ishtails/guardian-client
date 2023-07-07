import { create } from "zustand";

// FormStore
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

// OutingStore
type Outing = [{
  username: string;
  name: string;
  gender: string;
  mobile: number;
  hostel: string;
  room: number;
  idCard: string;
  isOpen: boolean;
  reason: string;
  lateBy: string;
  outTime: string;
  inTime: string;
}];

type Filter = {
  startDate?: string,
  endDate?: string,
  isOpen?: boolean,
  username?: string,
  reason?: string,
  isLate?: boolean,
}

type OutingStore = {
  outing: Outing | null;
  filter: Filter | null;
  isLoading: boolean;
  setOuting: (outing: Outing) => void;
  setFilter: (filter: Filter) => void;
  setIsLoading: (isLoading:boolean) => void;
};

export const useOutingStore = create<OutingStore>((set) => ({
  outing: null,
  filter: null,
  isLoading: true,
  setOuting: (outing) => set({ outing }),
  setFilter: (filter: Filter) => set({ filter }),
  setIsLoading: (isLoading) => set({isLoading}),
}));