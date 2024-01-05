import classesTP from "./TPayment.module.css";
import Navbar from "../Global/Navbar/Navbar";
import { Fragment } from "react";
import TriggerIcon from "../../svgs/Trigger";
import Faq from "../Global/Faq/Faq";
import PreFooter from "../Global/PreFooter/PreFooter";
import Footer from "../Global/Footer/Footer";

const TPayment = () => {
  return (
    <Fragment>
      <header className={classesTP.header}>
        <Navbar />
        <div className={classesTP.boxFrame}>
          <div className={classesTP.picturebox}>
            <div className={classesTP.pic1}></div>
            <div className={classesTP.pic2}></div>
          </div>
          <div className={classesTP.contentsBox}>
            <div className={classesTP.subContentBox}>
              <h1>Track your school fees payments quickly and accurately</h1>
              <p>Track your fees using your reference number. You can find this reference number in the email that was sent to you.</p>
            </div>
            <div className={classesTP.bgCon}>
              <div className={classesTP.contentsFrame}>
                <div className={classesTP.inputBox}>
                  <h1>Get started here</h1>
                  <input type="text" placeholder="Enter your reference number" />
                </div>
                <div className={classesTP.btnContentBox}>
                  <button>Track payment</button>
                  <p>
                    Lost your reference number? <span>Chat with us</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={classesTP.faqSec}>
        <div className={classesTP.triggerIcon}>
          <TriggerIcon />
        </div>
        <Faq />
        <PreFooter />
        <Footer />
      </section>
    </Fragment>
  );
};

export default TPayment;

