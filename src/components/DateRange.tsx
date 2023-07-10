import { Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRange = () => {
  const [state, setState] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  });

  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  return (
    <div>
      <button
        className="inline-flex justify-between gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
        onClick={() => setShowPicker(!showPicker)}
      >
        Select Date Range
      </button>

      <Transition
        show={showPicker}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div
            ref={ref}
            className="fixed inset-0 -top-10 flex items-center justify-center z-50"
            onClick={(event) => {
                if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                  setShowPicker(false);
                }
              }}
          >
            <div
              ref={pickerRef}
              className="absolute right-10 bg-white rounded-xl p-2 border shadow-card-shadow"
            >
              <DateRangePicker
                onChange={(item) => setState({ ...state, ...item })}
                months={1}
                minDate={addDays(new Date(), -300)}
                maxDate={addDays(new Date(), 900)}
                direction="vertical"
                scroll={{ enabled: true }}
                ranges={[state.selection]}
              />
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default DateRange;
