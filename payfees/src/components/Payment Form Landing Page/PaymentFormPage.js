import pgClasses from "./PaymentFormPage.module.css";
import Navbar from "../Global/Navbar/Navbar";
import Vector from "../../svgs/Vector.png";
import VectorOutline from "../../svgs/VectorOutline.png";
import Student from "../../svgs/student.png";
import ArrowCricleLeftSvg from "../../svgs/ArrowCircleLeft";
import ArrowDown from "../../svgs/ArrowDown";
import Modal from "../Modals/Modal";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PaymentFormPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Fragment>
      <Modal
        showModal={showModal}
        modalOnClose={() => {
          setShowModal(false);
        }}
        activeModal="createAccount"
      />
      <main className={pgClasses.payformSec}>
        <section className={pgClasses.navbarSec}>
          <Navbar payFormPg={true} />
        </section>
        <div className={pgClasses.titleFrame}>
          <div className={pgClasses.titleBox}>
            <h1>Seize your without payment delays.</h1>
            <p>Make international fee payments from anywhere within minutes, and never miss a deadline.</p>
          </div>

          <div className={pgClasses.overlapWrapper}>
            <img className={pgClasses.img2} alt="Vector" src={Vector} />
            <img className={pgClasses.img2} alt="Mask group" src={VectorOutline} />
            <img className={pgClasses.maskGroup} alt="Mask group" src={Student} />
          </div>
        </div>

        <div className={pgClasses.formFrame}>
          <div className={pgClasses.backFrame}>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}>
              <ArrowCricleLeftSvg />
              <p>Back</p>
            </div>
            <p>
              Have questions? <span>Chat with us</span>
            </p>
          </div>

          <form>
            <div className={pgClasses.formCon}>
              <div className={pgClasses.previewBox}>
                <div className={pgClasses.previewFrame}>
                  <div className={pgClasses.nameBox}>
                    <div>
                      <span>Australian Catholic University</span>
                    </div>
                    <p>Continue payment to</p>
                  </div>

                  <div className={pgClasses.rateFrame}>
                    <div className={pgClasses.singleRateFrame}>
                      <p>Actual Amount</p>
                      <h1>A$20,000.00</h1>
                    </div>
                    <div className={pgClasses.singleRateFrame}>
                      <p>Exchange rate</p>
                      <h1>1 AUD = 577.25 NGN</h1>
                    </div>
                    <div className={pgClasses.singleRateFrame}>
                      <p>Total amount to pay</p>
                      <h1>1 NGN - 577.25 AUD</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className={pgClasses.formBox}>
                <input type="text" placeholder="Given name" className={pgClasses.input} />
                <input type="text" placeholder="Family name" className={pgClasses.input} />
                <input type="text" placeholder="Email address" className={pgClasses.input} />
                <div className={pgClasses.phonebox}>
                  <div className={pgClasses.selectBox}>
                    <span>+234</span>
                    <ArrowDown />
                  </div>
                  <input type="text" placeholder="Phone number" />
                </div>
                <input type="text" placeholder="Street address" className={pgClasses.input} />
              </div>
            </div>

            <div className={pgClasses.actionAgreementFrame}>
              <div>
                <input type="checkbox" className={pgClasses.checkbox} />
                <div className={pgClasses.termFrame}>
                  <p>I have read, understand, and agree to the PayFees</p>
                  <p>
                    <Link
                      to="https://payfees.co/term-of-use"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent normal navigation
                        openInNewTab("https://payfees.co/term-of-use");
                      }}>
                      <span className={pgClasses.link}>Terms of Use</span>
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="https://payfees.co/privacy-policy"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent normal navigation
                        openInNewTab("https://payfees.co/privacy-policy");
                      }}>
                      <span className={pgClasses.link}>Privacy Polic</span>
                    </Link>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                }}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
};
export default PaymentFormPage;
