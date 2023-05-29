import changepass from "../../assets/illustrations/changepass.svg";
import changepass2 from "../../assets/illustrations/changepass2.svg";
import ChangePassInput from "../../components/ChangePassInput";
import ChangePassUI from "../../components/AuthUI";

const AdminChangePassword = () => {
  return (
    <ChangePassUI
      title="Change Password"
      InputField={ChangePassInput}
      illustration_1={changepass}
      illustration_2={changepass2}
    />
  );
};

export default AdminChangePassword;
