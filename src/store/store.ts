import { create } from "zustand";

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
