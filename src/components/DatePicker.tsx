import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue:any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      primaryColor={"sky"}
      value = {value}
      onChange={handleValueChange}
      showShortcuts={true}
      separator="to"
    />
  );
};
export default DatePicker;
