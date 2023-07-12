import { Link } from "react-router-dom";
import goback from "../../assets/icons/back-button.svg";
import bgbluegradient from "../../assets/darkblue-gradient-bg.svg";
import success_illustration from "../../assets/illustrations/success.svg";
import logo from "../../assets/icons/logo.svg";
import useFetchOutings from "../../helpers/fetchOutingHook";
import { useOutingStore } from "../../store/store";
import { useEffect, useState } from "react";
import moment from "moment";

const success = () => {
  const { outing, isLoading } = useOutingStore();
  const [exitTime, setExitTime] = useState<string | null>();

  useFetchOutings("/outings", { isOpen: true });

  // Calculate elapsed time
  const calculateElapsedTime = () => {
    if (exitTime) {
      const out = outing?.[0].outTime;
      const currentTime = new Date();
      const outFormatted = out?.split(" ")[1];

      const exitDate = new Date();
      const [hours, minutes, seconds] = moment(outFormatted, "HH:mm:ss")
        .format("HH:mm:ss")
        .split(":");
      exitDate.setHours(Number(hours));
      exitDate.setMinutes(Number(minutes));
      exitDate.setSeconds(Number(seconds));
      const elapsedTime = currentTime.getTime() - exitDate.getTime();

      return {
        hours: Math.floor(elapsedTime / (1000 * 60 * 60)),
        minutes: Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((elapsedTime % (1000 * 60)) / 1000),
      };
    }
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  const [elapsedTime, setElapsedTime] = useState(calculateElapsedTime());

  // Update elapsed time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(calculateElapsedTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [exitTime]);

  useEffect(() => {
    const storedExitTime = moment(outing?.[0].outTime, "YYYY-MM-DD HH:mm")
      .toDate()
      .toString();
    if (storedExitTime) {
      setExitTime(storedExitTime);
    }
  }, [outing]);

  return (
    <div>
      <div className="relative flex flex-col xl:hidden overflow-x-clip h-screen">
        <img src={bgbluegradient} className="absolute -z-10 scale-[300%]" />
        <div className="flex flex-col px-4 pb-3">
          {/* Navbar */}
          <nav className="space-y-2">
            <div className="flex pt-4 items-center justify-between ">
              <Link to={"/"} className="flex items-center space-x-2">
                <img src={goback} className="w-[24px] self-center" />
                <p className="text-white">Go Back</p>
              </Link>
            </div>
            <hr className="w-full" />
          </nav>

          {/* Illustration Box */}
          <div className="bg-white mt-8 shadow-card-shadow rounded-xl py-6 self-center w-[85%] flex flex-col items-center justify-center">
            <img src={success_illustration} className="w-full" />
          </div>

          {/* Message */}
          <div className="flex flex-col mt-6 mb-14 items-center text-[#0A77A8]">
            <h1 className="text-h32 font-bold">Success</h1>
            <h2 className="tracking-widest font-light">
              {isLoading ? "NA" : outing?.[0].outTime}
            </h2>

            <h2 className="tracking-wide mt-6 font-lexend font-bold text-6xl">
              {`${elapsedTime.hours
                .toString()
                .padStart(2, "0")}:${elapsedTime.minutes
                .toString()
                .padStart(2, "0")}:${elapsedTime.seconds
                .toString()
                .padStart(2, "0")}`}
            </h2>
          </div>

          {/* Footer */}
          <div className="z-10 bg-white flex flex-col space-y-2 fixed w-screen bottom-0 left-0">
            <hr />
            <img src={logo} className="w-[32px] self-center py-1" />
          </div>
        </div>
      </div>

      <div className="hidden xl:flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-sky-500 p-10 text-p20 shadow-card-shadow rounded-full border">
          Switch to a mobile device to view this page
        </h1>
        <Link
          to={"/"}
          className="font-medium text-p14 mt-5 underline underline-offset-2 transition hover:scale-110 text-sky-500"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default success;
