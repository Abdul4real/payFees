import classesSP from "./StartPaymentModal.module.css";
import MenuSvg from "../../../svgs/Menu";
import ArrowDown from "../../../svgs/ArrowDown";
import { Fragment } from "react";

const StartPaymentModal = (props) => {
  return (
    <Fragment>
      <div className={classesSP.centerFrame}>
        <div className={classesSP.previewFrame}>
          <div className={classesSP.innerPreviewFrame}>
            <div className={classesSP.previewTopFrame}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M7.7512 7.60277V10.8324M7.7512 14.0621C4.54055 14.0621 1.93781 11.4594 1.93781 8.2487C1.93781 5.03805 4.54055 2.4353 7.7512 2.4353C10.9619 2.4353 13.5646 5.03805 13.5646 8.2487C13.5646 11.4594 10.9619 14.0621 7.7512 14.0621ZM7.78337 5.66497V5.72956L7.71903 5.72955V5.66497H7.78337Z"
                    stroke="#218BFC"
                    stroke-width="1.29187"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Amount will be formatted in the destination currency.</p>
              </div>
              <p>
                Have questions? <span>Chat with us</span>
              </p>
            </div>

            <div className={classesSP.previewBottomFrame}>
              <div>
                <p>Payfess exchange rate</p>
                <div className={classesSP.menuAmountFrame}>
                  <h5>₦1</h5>
                  <div className={classesSP.menu}>
                    <MenuSvg />
                  </div>
                  <h5>$572</h5>
                </div>
              </div>

              <div>
                <p>Total amount to pay</p>
                <h5>$7,000.00</h5>
              </div>

              <div>
                <p>Total amount to pay in your local currency</p>
                <h5>$0.00</h5>
              </div>
            </div>
          </div>
        </div>

        <div className={classesSP.formFrame}>
          <div className={classesSP.innerFormFrame}>
            <div>
              <input type="text" placeholder="What country are you paying from?" />
              <ArrowDown />
            </div>
            <div>
              <input type="text" placeholder="Select payment type" />
              <ArrowDown />
            </div>
            <div>
              <input type="text" placeholder="How much do you want to pay?" />
            </div>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M3.5 7.5H10.5M7 11L7 4" stroke="#218BFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Add payment</span>
          </button>
        </div>
      </div>

      <div className={classesSP.bottomFrame}>
        <button onClick={props.modalOnClose}>Close</button>
        <button onClick={props.openPrefferedPaymentModal}>See available payment options</button>
      </div>
    </Fragment>
  );
};
export default StartPaymentModal;
