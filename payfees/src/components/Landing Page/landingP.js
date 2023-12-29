import classes from "./LandingP.module.css";
import Navbar from "../Global/Navbar/Navbar";
import DropDownIcon from "../../svgs/DropownIcon";
import Vector from "../../svgs/Vector.png";
import VectorOutline from "../../svgs/VectorOutline.png";
import Student from "../../svgs/student.png";
import { Fragment } from "react";
import SectionBBackground from "../../svgs/OBJECTS.svg";
import SectionBWoman from "../../svgs/woman.png";
import SecBIcon1 from "../../svgs/secBIcon1";
import SecBIcon2 from "../../svgs/secBIcon2";
import TriggerIcon from "../../svgs/Trigger";

const LandingPage = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <Navbar />
        <div className={classes.contentConatiner}>
          <div className={classes.titleBox}>
            <div>
              <h1>
                Seize your <span>moments,</span> without payment delays.
              </h1>
              <p>Make international fee payments from anywhere within minutes, and never miss a deadline.</p>
            </div>
            <div>
              <div className={classes.actionFrame}>
                <h2>get started here</h2>
                <div>
                  <span>Choose the country your school is located in</span>
                  <DropDownIcon />
                </div>
                <div>
                  <span>Select your school name</span>
                  <DropDownIcon />
                </div>
              </div>
              <div className={classes.actionBtnsBox}>
                <button>Start payment</button>
                <button>Look for your school here</button>
              </div>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <div className={classes.overlapWrapper}>
              <img className={classes.img2} alt="Vector" src={Vector} />
              <img className={classes.img2} alt="Mask group" src={VectorOutline} />
              <img className={classes.maskGroup} alt="Mask group" src={Student} />
            </div>
          </div>
        </div>
      </main>
      <section className={classes.sectionB}>
        <div className={classes.triggerIcon}>
          <TriggerIcon />
        </div>
        <div className={classes.box}>
          <div className={classes.imgCon}>
            <img className={classes.sectionBVector} src={SectionBBackground} alt="" srcset="" />
            <img className={classes.sectionBVectorImage} src={SectionBWoman} alt="" srcset="" />
          </div>
          <div className={classes.contentBox}>
            <h1>Cross Border Fee Payments Have Never Been Easier</h1>
            <div>
              <div className={classes.featurebox}>
                <div>
                  <SecBIcon1 />
                </div>
                <div>
                  <h5>Never miss a payment deadline with lightning-fast fee payments</h5>
                  <p>
                    No delays. We understand the critical importance of timely payment for securing your educational opportunities abroad. Our payment system ensures that your payments are processed
                    quickly and securely.
                  </p>
                </div>
              </div>
              <div className={classes.featurebox}>
                <div>
                  <SecBIcon2 />
                </div>
                <div>
                  <h5>Stay in the Loop from start to finish</h5>
                  <p>
                    There are no blind spots. Conveniently track and monitor the progress of your transactions directly on our platform. We give you complete visibility and control over your
                    international fee payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingPage;
