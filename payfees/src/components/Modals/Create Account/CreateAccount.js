import classesSP from "./CreateAccount.module.css";
import HidePasswordSvg from "../../../svgs/HidePassword";
import { Fragment } from "react";

const CreateAccount = () => {
  return (
    <Fragment>
      <div className={classesSP.centerFrame}>
        <div className={classesSP.innerCenterFrame}>
          <p>We see that you’re yet to create an account with us, this is important to be able to track any payment you’re making on Payfees. Enter and confirm your password to create an account</p>
          <div className={classesSP.formFrame}>
            <div className={classesSP.passwordFrame}>
              <input type="password" placeholder="Create a password" />
              <HidePasswordSvg />
            </div>
            <div className={classesSP.passwordFrame}>
              <input type="password" placeholder="Confirm your password" />
              <HidePasswordSvg />
            </div>
          </div>
        </div>
      </div>

      <div className={classesSP.bottomFrame}>
        <p>
          Have questions? <span>Chat with us</span>
        </p>
        <button>Confirm</button>
      </div>
    </Fragment>
  );
};
export default CreateAccount;
