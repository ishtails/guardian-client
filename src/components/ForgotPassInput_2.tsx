import { Link } from "react-router-dom";

const ForgotPassInput_1 = (props: { title: string }) => {
  return (
    <div className="flex flex-col">
      <div className="py-2">
        <span className="font-lexend font-bold text-h36 sm:text-h32">
          {props.title}
        </span>
        <p className="text-[#667085] text-h16 sm:text-h14">
          Enter the OTP sent to your email
        </p>
      </div>
      <div className="py-3 space-y-1">
        <h1 className="text-[#344054] text-h14 font-medium">OTP</h1>
        <input
          type="text"
          placeholder="Enter OTP"
          className="border-2 rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-2 w-full focus:outline-sky-300 focus:bg-slate-50 hover:bg-slate-50"
        />
      </div>
      <div className="pt-3 pb-1">
        <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition font-semibold">
          Submit
        </button>
      </div>
      <div className="flex flex-col items-center text-decoration-line: underline mt-2">
        <Link to="/admin" className="text-[#0EA5E9] transition font-medium hover:text-sky-600">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassInput_1;
