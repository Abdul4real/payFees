import classes from "./ContactPage.module.css";
import conPic from "../../svgs/conPic.jpeg";
import Navbar from "../Global/Navbar/Navbar";
import Footer from "../Global/Footer/Footer";
import React from "react";
const ContactPage = () => {
  return (
    <div className={classes.main}>
       <Navbar />
      <div className={classes.frame6}>
        <div className={classes.frame41}>
          <div className={classes.T1}>
            You don’t have to navigate the complexities of international fee payments alone. 
          </div>
        </div>
        <div className={classes.T2}>
            We’re here to assist you every step of the way. From questions to assistance, or maybe you simply want to connect, we’re just a click or a call away. We look forward to helping you on your journey.
            You don’t have to navigate the complexities of international tuition payments alone. We’re here to assist you every step of the way. From questions to assistance, or maybe you simply want to connect, we’re just a click or a call away.
          </div>
      </div>
      <div className={classes.section2}>
        <div className={classes.content}>
          <div className={classes.St1}>
          We look forward to helping you on your journey.
          </div>
          <div className={classes.St2}>
          Reach out to us
          </div>
        </div>
        <div className={classes.cont}>
          <div className={classes.ct}>
            <div className={classes.ct1}>
            Email
            </div>
            <div className={classes.ct2}>
            Our friendly team is here to help.
            </div>
            <div className={classes.ct3}>
            hi@payfees.co
            </div>
          </div>
          <div className={classes.ct}>
          <div className={classes.ct1}>
          Office Address
            </div>
            <div className={classes.ct2}>
            Come say hello at our office HQ.
            </div>
            <div className={classes.ct3}>
            100 Smith Street Collingwood VIC 3066 AU
            </div>
          </div>
          <div className={classes.ct}>
          <div className={classes.ct1}>
          Phone
            </div>
            <div className={classes.ct2}>
            Mon-Fri from 8am to 5pm.
            </div>
            <div className={classes.ct3}>
            +1 (555) 000-0000
            </div>
          </div>
          </div>
          <div className={classes.cont2}>
            <div className={classes.psy1}>
              <div className={classes.as}>
              Ways We Can Assist You
              </div>
              <div className={classes.gi}>
              General Inquiries
              </div>
              <div className={classes.que}>
              Have a question about our services, platform, or process? Feel free to reach out,
               and we’ll be happy to provide you with every information you need.
              </div>
              <a className={classes.links} href="#">send us an email</a>
              <div className={classes.ts}>
              Technical Support
              </div>
              <div className={classes.ft}>
              Facing any technical challenges or do you just need assistance with navigating our platform? We’re just a call away.
              </div>
              <a className={classes.links} href="#"> Call us</a>
              </div> 
            <div className={classes.psy1}>
              <div className={classes.as}>
              Ways We Can Assist You
              </div>
              <div className={classes.gi}>
              Partnership Opportunities
              </div>
              <div className={classes.que}>
              We believe a vision as big as ours will need more hands than ours. 
              Interested in collaborating with us or becoming a partner? We just might have something interesting to say as well.
              </div>
              <a className={classes.links} href="#"> send us an email</a>
              <div className={classes.ts}>
              Feedback and Suggestions
              </div>
              <div className={classes.ft}>
              We’re building for you, so we value your input. Share your feedback, suggestions, or ideas with us.
              </div>
              <a className={classes.links} href="#"> send us an email</a>
              </div> 
              </div> 
              <div className={classes.cont3}>
                <div>
                  <img className={classes.conPic} alt="pic" src={conPic} />
                </div>
              </div>
          </div>
          <Footer/>
        </div>
  );
};

export default ContactPage;
