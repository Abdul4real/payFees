import classes from "./AboutPage.module.css";
import image11 from "../../svgs/image11.jpeg";
import image22 from "../../svgs/image22.png";
import lp from "../../svgs/lp11.jpeg";
import conPic from "../../svgs/conPic.jpeg";
import image33 from "../../svgs/image33.png";
import image44 from "../../svgs/image44.png";
import Footer from "../Global/Footer/Footer";
import Navbar from "../Global/Navbar/Navbar";
import React from "react";
const AboutPage = () => {
  return (
    <div className={classes.main}>
             <Navbar />
      <div className={classes.part1}>
        <div className={classes.section1}>
          <div className={classes.frame41}>
              We Are African’s 
              Building For Africans
            </div>
            We celebrate the courage to embrace a future without boundaries because we understand the burden of uncertainty that comes with navigating the complex process of studying abroad.
            We believe that the desire to be in control of one’s own future is a fundamental human need, and an unreliable traditional banking infrastructure should not be what robs African students of their aspirations to study abroad.
        </div>
        <div className={classes.section2}>
          <div className={classes.img} >
          <img className={classes.conPic} alt="pic" src={image11} />
          <img className={classes.conPic} alt="pic" src={image22} />
          </div>
          <div className={classes.img2} >
          <img className={classes.conPic} alt="pic" src={image33} />
          <img className={classes.conPic} alt="pic" src={image44} />
          </div>
        </div>
      </div>
      <div className={classes.part2}>
        <div className={classes.fr}>
          <div className={classes.fr2}>
            <div className={classes.fr3}>
            We are on a mission to improve the tuition 
                payment experience for international 
                students and eliminate transaction limitations.
            </div>
              We are enabling African students to meet their payment deadlines with ease and confidence through our cross-border payment platform. We understand the challenges African students face when it comes to making cross-border payments for their education.
              That's why we built Payfees to simplify the payment process so Africans who want to study abroad can make school payments faster, more conveniently, and at highly competitive rates.
          </div>
        </div>
        <div className={classes.third}>
          <img className={classes.im} alt="pic" src={lp}/>
          <div className={classes.tr}>
            <div className={classes.ov}>Our vision
            </div>
            <div className={classes.ge}>
            For every African Student to have an equal opportunity to explore Global Education.
            </div>
            <div className={classes.rg}>
            Whether you are a student, parent/guardian, or education service provider, we are here to support your respective goals.
            </div>
          </div>
        </div>
        <div className={classes.cont3}>
                <div>
                  <img className={classes.cp} alt="pic" src={conPic} />
                </div>
              </div>
          </div>
          <Footer/>
    </div>
  );
};

export default AboutPage;

