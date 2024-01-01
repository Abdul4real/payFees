import React from "react";
import image3 from "../../svgs/image3.png";
import Student from "../../svgs/image4.png";
import classes from "./TPayment.module.css";
const TPayment = () => {
return (
<div className={classes.main}>
<div className={classes.imgContainer}>
            <div className={classes.overlapWrapper}>
              <img className={classes.img2} alt="Mask group" src={Student} />
              <img className={classes.maskGroup} alt="Vector" src={image3} />
            </div>
          </div>
          <div>Track your school fees <br/>payments quickly and <br/>accurately</div>
          <div>Track your fees using your reference number. You can find this reference number in the email that was sent to you.</div>
          <div>Get started here</div>
          <div className={classes.rn}>Enter your reference number</div>
          <div className={classes.tp}>Track payment</div>
</div>
  );
};
export default TPayment;