import classesSP from "./PrefferedPaymentModal.module.css";
import MenuSvg from "../../../svgs/Menu";
import ArrowCricleLeftSvg from "../../../svgs/ArrowCircleLeft";
import UniverseIcon from "../../../svgs/UniverseIcon";
import TransferIcon from "../../../svgs/TransferIcon";
import CheckIcon from "../../../svgs/CheckIcon";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";

const banktransfer = {
  icon: <TransferIcon />,
  title: "Bank Transfer",
  rate: "572",
  totalAmountToPayInLocalC: "4,007,000",
  selected: false,
};

const onlinePayment = {
  icon: <UniverseIcon />,
  title: "Online Payment",
  rate: "572",
  totalAmountToPayInLocalC: "4,007,000",
  selected: false,
};

const PrefferedPaymentModal = (props) => {
  const [paymentOptions, setPaymentOptions] = useState([banktransfer, onlinePayment]);
  const navigate = useNavigate();

  const togglePaymentOption = (index) => {
    setPaymentOptions((currentOptions) =>
      currentOptions.map((option, i) => {
        if (i === index) {
          return { ...option, selected: !option.selected };
        }
        return option.selected ? { ...option, selected: false } : option;
      })
    );
  };
  const isAnyOptionSelected = () => {
    return paymentOptions.some((option) => option.selected);
  };

  return (
    <Fragment>
      <div className={classesSP.centerFrame}>
        <div className={classesSP.innerCFrame}>
          <div className={classesSP.backFrame} onClick={props.openStartPaymentModal}>
            <ArrowCricleLeftSvg />
            <span>Back</span>
          </div>

          <div className={classesSP.optionsFrame}>
            {paymentOptions.map((option, index) => {
              return (
                <div className={classesSP.optFrame} key={index}>
                  <div className={classesSP.innerOptFrame}>
                    <div className={classesSP.innerOptTopFrame}>
                      <div className={classesSP.bankTfFrame}>
                        <div className={classesSP.bankIcon}>{option.icon}</div>
                        <span>{option.title}</span>
                      </div>
                      <button className={option.selected ? classesSP.selected : ""} onClick={() => togglePaymentOption(index)}>
                        {option.selected && <CheckIcon />}
                        <span>{option.selected ? "Unselect" : "Select"}</span>
                      </button>
                    </div>

                    <div className={classesSP.innerOptBtmFrame}>
                      <div className={classesSP.contentBox}>
                        <p>Payfess exchange rate</p>
                        <div className={classesSP.menuAmountFrame}>
                          <h5>₦1</h5>
                          <div className={classesSP.menu}>
                            <MenuSvg />
                          </div>
                          <h5>${option.rate}</h5>
                        </div>
                      </div>

                      <div className={classesSP.contentBox}>
                        <p>Total amount to pay in your local currency</p>
                        <h5>₦{option.totalAmountToPayInLocalC}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={classesSP.bottomFrame}>
        <p>
          Have questions? <span>Chat with us</span>
        </p>
        <button
          className={isAnyOptionSelected() ? classesSP.btnActive : ""}
          onClick={() => {
            isAnyOptionSelected() && navigate("/payment-form");
          }}>
          Confirm
        </button>
      </div>
    </Fragment>
  );
};
export default PrefferedPaymentModal;
