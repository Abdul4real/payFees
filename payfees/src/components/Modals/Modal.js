import classesSP from "./Modal.module.css";
import CancelSvg from "../../svgs/CancelSvg";
import StartPaymentModal from "./Start Payment Modal/StartPaymentModal";
import PrefferedPaymentModal from "./Preffered Payment Modal/PrefferedPaymentModal";
import CreateAccount from "./Create Account/CreateAccount";
import { useState } from "react";
import { useEffect } from "react";

const Modal = (props) => {
  const [activeModal, setActiveModal] = useState(props.activeModal);

  useEffect(() => {
    let timer;
    if (!props.showModal) {
      timer = setTimeout(() => {
        setActiveModal(props.activeModal);
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [props.showModal, props.activeModal]);

  return (
    <main className={`${classesSP.modal} ${props.showModal ? classesSP.openModal : classesSP.closeModal}`}>
      <div className={`${classesSP.frame} ${props.showModal ? classesSP.slideup : classesSP.slideDown} `}>
        <div className={classesSP.topFrame}>
          <div className={classesSP.topInnerFrame}>
            <p>Start payment</p>
            <div onClick={props.modalOnClose}>
              <CancelSvg />
            </div>
          </div>
        </div>
        {activeModal === "startPaymentModal" && (
          <StartPaymentModal
            modalOnClose={props.modalOnClose}
            openPrefferedPaymentModal={() => {
              setActiveModal("prefferedPaymentModal");
            }}
          />
        )}
        {activeModal === "prefferedPaymentModal" && (
          <PrefferedPaymentModal
            openStartPaymentModal={() => {
              setActiveModal("startPaymentModal");
            }}
          />
        )}
        {activeModal === "createAccount" && <CreateAccount />}
      </div>
    </main>
  );
};
export default Modal;
