declare module "*.svg" {
  const content: any;
  export default content;
}

type Avatar = {
  url: string;
  details: string;
};

type TableColumn =
  | "Date"
  | "Roll No"
  | "Name"
  | "Hostel"
  | "Room"
  | "Out Time"
  | "In Time"
  | "Reason"
  | "Close Entry"
  | "Late By"
  | "Out Time"
  | "In Time"
  | "Reason";

type TableRow = any;

// Store
type FormStore = {
  formValues: {
    [key: string]: any;
  };
  setFormField: (fieldName: string, value: any) => void;
};

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
  isOutside: boolean;
};

type UserStore = {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};

type Outing = [
  {
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
  }
];

type OutingStore = {
  outing: Outing | null;
  filter: Filter | null;
  isLoading: boolean;
  setOuting: (outing: Outing | null) => void;
  setFilter: (filter: Filter | null) => void;
  setIsLoading: (isLoading: boolean) => void;
};

type Filter = {
  startDate?: string | null;
  endDate?: string | null;
  isOpen?: boolean | null;
  username?: string | null;
  reason?: string | null;
  isLate?: true | null;
  gender?: "male" | "female" | null;
};

type searchObj = {
  username: string;
  name: string;
  hostel: string;
  mobile: number;
  room: number;
  profilePic: string,
  idCard: string,
};