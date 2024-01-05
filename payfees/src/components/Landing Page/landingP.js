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
import SecCPic3 from "../../svgs/service-provider.png";
import SecCPic2 from "../../svgs/parent-guardian.png";
import SecCPic1 from "../../svgs/studentSecC.png";
import secEHowItWorks from "../../svgs/how-it-works.png";
import secEHowItWorks2 from "../../svgs/how-it-works2.png";
import secEHowItWorks3 from "../../svgs/how-it-works3.png";
import CaretCircleSvg from "../../svgs/Caret_Circle_Down";
import Profile from "../../svgs/profileStories.png";
import SecuredSVG from "../../svgs/Secured";
import LockSVG from "../../svgs/Lock";
import WavyCheckSVG from "../../svgs/WavyCheck";
import GlobeSVG from "../../svgs/Globe";
import Faq from "../Global/Faq/Faq";
import PreFooter from "../Global/PreFooter/PreFooter";
import Footer from "../Global/Footer/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Modal from "../Modals/Modal";

const sectionContent = [
  {
    title: "I'm a ",
    description1: "We understand the challenges you face when it comes to processing international fees and securing your place in your dream university.",
    description2:
      "That's why we built Payfees, so you can say goodbye to the stress and uncertainty of traditional banking systems. Because we believe nothing should be in control of your educational journey, besides you.",
    header: "student",
    image: SecCPic1,
  },
  {
    title: "I'm a ",
    description1: "We know that the financial aspects of sending your child abroad can be overwhelming and worrisome.",
    description2:
      "We've recognized your concerns, and that is why we built Payfees to help alleviate these concerns. Make international fee payments from anywhere and within minutes — no delays, no hidden fees, and no stress.",
    header: "parent/guardian",
    image: SecCPic2,
  },
  {
    title: "I'm a ",
    description1: "You dont have to navigate the complexities of processing international fee payments alone.",
    description2:
      "At Payfees, we understand the needs of education service providers like you, that's why we built a solution that simplifies your processes, reduces workload, and provides your students with a simple and secure payment experience.",
    header: "service provider",
    image: SecCPic3,
  },
];

const LandingPage = () => {
  const [secCActive, setSecCActive] = useState(1);
  const intervalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Handle item click logic
    console.log(`Clicked on ${item}`);
    // Close the dropdown after item click if needed
    setIsOpen(false)};

  // Function to cycle through sections
  const cycleSections = () => {
    setSecCActive((prev) => (prev === 3 ? 1 : prev + 1));
  };

  // Automatic cycling with manual reset
  useEffect(() => {
    intervalRef.current = setInterval(cycleSections, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleSectionClick = (section) => {
    clearInterval(intervalRef.current);
    setSecCActive(section);
    intervalRef.current = setInterval(cycleSections, 1000); // Restart the interval
  };

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
        activeModal="startPaymentModal"
      />

      <main className={classes.main}>
        <Navbar />
        <div className={classes.contentConatiner}>
          <div className={classes.titleBox}>
            <div>
              <h1>
                Seize your <span className={`${classes.animatedText} ${classes[""]} ${classes[""]}`}>{"moments"},</span>
              </h1>
              <h1>without payment delays.</h1>
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
                <button
                  onClick={() => {
                    console.log("clicked");
                    setShowModal(true);
                  }}>
                  Start payment
                </button>
                {/* <button>Look for your school here</button> */}
                    <button onClick={toggleDropdown}>Look for your school here</button>
                    {isOpen && (
                      <ul className="dropdown-menu">
                        <li onClick={() => handleItemClick('Item 1')}>Centennial College</li>
                      </ul>
                    )}
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

      <section id="Resources" className={classes.sectionC}>
        <div className={classes.sectionC_Container}>
          <div>
            <h1>Built by Africans for Africans</h1>
            <div className={classes.sectionC_ContentBox}>
              {sectionContent.map((section, index) => (
                <div key={index + 1} className={`section ${secCActive === index + 1 ? classes.active : classes.inactive}`} onClick={() => handleSectionClick(index + 1)}>
                  <h1>
                    {section.title} <span>{section.header}</span>
                  </h1>
                  <p>{section.description1}</p>
                  <p>{section.description2}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {sectionContent.map((section, index) => (
              <img
                key={section.title}
                src={section.image} // Replace with your image sources
                alt={`Description for ${section}`}
                className={secCActive === index + 1 ? classes.fadeIn : classes.fadeOut}
              />
            ))}
            {secCActive === 1 && <img src={SecCPic1} alt="student" srcset="" />}
            {secCActive === 2 && <img src={SecCPic2} alt="parent guardian" srcset="" />}
            {secCActive === 3 && <img src={SecCPic3} alt="service provider" srcset="" />}
          </div>
        </div>
      </section>

      <section className={classes.sectionD}>
        <div className={classes.sectionD_Container}>
          <h1>
            Embrace a future without <span>boundaries.</span>
          </h1>
          <p>
            Our dream is to see aspiring African students seize their educational opportunities beyond borders from anywhere and within minutes. This means providing a reliable, efficient, and secure
            way for making international fee payments.
          </p>
          <div className={classes.secDImgBox}>
            <div className={classes.bg}></div>
            <p>
              Every student deserves control over their educational journey. And by removing the barriers imposed by traditional payment systems, we provide aspiring students with the freedom to
              embrace a future without boundaries.
            </p>
            <div className={classes.secDFrame}>
              <div>
                <h1>$100M+</h1>
                <p>Cumulative value of fees paid</p>
              </div>
              <div>
                <h1>20000+</h1>
                <p>Fee payments processed</p>
              </div>
              <div>
                <h1>3 days</h1>
                <p>Average time on all transactions</p>
              </div>
              <div>
                <h1>1000+</h1>
                <p>African Students supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  id="How-it-works" className={classes.sectionE}>
        <div className={classes.sectionE_Container}>
          <h1>Your educational journey in just a few clicks</h1>
          <div>
            <div className={classes.howItWorksFrame}>
              <div>
                <div>
                  <span>1</span>
                </div>
                <div>
                  <h1>Find your institution</h1>
                  <p>
                    Initiate your payment request{" "}
                    <Link
                      to="https://payfees.co/"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent normal navigation
                        openInNewTab("https://payfees.co/");
                      }}>
                      <span className={classes.link}>here</span>
                    </Link>{" "}
                    . Enter the name of the institution you want to pay, or make your selection from the drop-down menu.
                  </p>
                  <p>If you do not see your institution listed, please contact support.</p>
                </div>
              </div>
              <div className={classes.secEFirstImage}>
                <img src={secEHowItWorks} alt="" srcset="" />
              </div>
            </div>

            <div className={classes.howItWorksFrame}>
              <div>
                <div>
                  <span>2</span>
                </div>
                <div>
                  <h1>Enter your country and payment amount</h1>
                  <p>
                    Once you have selected the institution, enter the country you are paying from and the amount to be paid. The exchange rate used and the actual amount to be paid in your local
                    currency will be automatically displayed.
                  </p>
                </div>
              </div>
              <div className={classes.SecEmidImage}>
                <img src={secEHowItWorks2} alt="" srcset="" />
              </div>
            </div>

            <div className={classes.howItWorksFrame}>
              <div>
                <div>
                  <span>3</span>
                </div>
                <div>
                  <h1>Find your institution</h1>
                  <p>
                    <Link
                      to="https://payfees.co/"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent normal navigation
                        openInNewTab("https://payfees.co/");
                      }}>
                      <span className={classes.link}>Payfee.co</span>
                    </Link>{" "}
                    currently offers bank transfers only. Select the option available and proceed to the next step.
                  </p>
                </div>
              </div>
              <div className={classes.secELastImage}>
                <img src={secEHowItWorks3} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.sectionF}>
        <div className={classes.sectionF_Container}>
          <div className={classes.sectionFTitleBox}>
            <h1>
              Stories that <span>inspire us</span>
            </h1>
            <div className={classes.arrowBox}>
              <CaretCircleSvg />
              <CaretCircleSvg />
            </div>
          </div>

          <div className={classes.sectionFContentBox}>
            <div>
              <img src={Profile} alt="" srcset="" />
              <p>As a Nigerian parent with a son studying in Canada, this service has relieved the stress of tuition payments. It's simple, efficient, and trustworthy - a real peace of mind!</p>
              <h4>Afeez Balogun</h4>
            </div>
            <div>
              <img src={Profile} alt="" srcset="" />
              <p>As a Nigerian parent with a son studying in Canada, this service has relieved the stress of tuition payments. It's simple, efficient, and trustworthy - a real peace of mind!</p>
              <h4>Afeez Balogun</h4>
            </div>
            <div>
              <img src={Profile} alt="" srcset="" />
              <p>As a Nigerian parent with a son studying in Canada, this service has relieved the stress of tuition payments. It's simple, efficient, and trustworthy - a real peace of mind!</p>
              <h4>Afeez Balogun</h4>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.sectionG}>
        <div className={classes.sectionG_Container}>
          <div className={classes.securedBox}>
            <SecuredSVG />
          </div>
          <div className={classes.sectionGBox}>
            <h1>Your Transactions Are Secured With Bank-Grade Security</h1>
            <div className={classes.sectionGFrame}>
              <div className={classes.frame}>
                <div className={classes.iconBox}>
                  <LockSVG />
                </div>
                <h5>Our platform uses advanced encryption standards (256 Bit AES Encryption)</h5>
              </div>

              <div className={classes.frame}>
                <div className={classes.iconBox}>
                  <GlobeSVG />
                </div>
                <div className={classes.pBox}>
                  <h5>Our payment partners are registered with the </h5>
                  <p>Financial Transactions and Reports Analysis Centre of Canada (FINTRAC)</p>
                  <p>Financial Crimes Enforcement Network (FinCEN) in the USA</p>
                  <p>Financial Conducts Authority (FCA) in the United Kingdom as PSD Agent.</p>
                </div>
              </div>

              <div className={classes.frame}>
                <div className={classes.iconBox}>
                  <WavyCheckSVG />
                </div>
                <h5>Our bank-level security ensures your data is protected and secure with HTTPS/TLS v1.3 </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <PreFooter />

      <Footer />
    </Fragment>
  );
};

export default LandingPage;
