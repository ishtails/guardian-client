import PasswordInput from "./PasswordInput";

const ChangePassInput = (props: { title: string }) => {
  return (
    <div className="flex flex-col">
      <div className="py-2">
        <span className="font-lexend font-bold text-h36 sm:text-h32">
          {props.title}
        </span>
        <p className="text-[#667085] text-h16 sm:text-h14">
          Reset your password
        </p>
      </div>
      <div className="py-2 mt-2">
        <h1 className="text-[#344054] text-h14 font-medium">Enter Current Password</h1>
        <div className="relative">
          <PasswordInput />
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-[#344054] text-h14 font-medium">Enter New Password</h1>
        <div className="relative">
          <PasswordInput />
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-[#344054] text-h14 font-medium">Confirm New Password</h1>
        <div className="relative">
          <PasswordInput />
        </div>
      </div>
      <div className="mt-4">
        <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
          Submit
        </button>
      </div>
      <div className="flex flex-col items-center text-decoration-line: underline mt-2">
        <a href="" className="text-[#104A70] hover:text-sky-600 transition font-medium">
          Back to Login
        </a>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ChangePassInput;
