import classes from "./Footer.module.css";
import LogoSvg from "../../../svgs/LogoSvg";
import InstaSvg from "../../../svgs/InstaSvg";
import TwitterSvg from "../../../svgs/TwitterSvg";
import FacebookSvg from "../../../svgs/FacebookSvg";
import LinkedInSvg from "../../../svgs/LinkedInSvg";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.socialBox}>
          <div>
            <LogoSvg />
          </div>
          <div className={classes.socialIconBox}>
            <TwitterSvg />
            <InstaSvg />
            <FacebookSvg />
            <LinkedInSvg />
          </div>
        </div>

        <div className={classes.contentsBox}>
          <div className={classes.frameBox}>
            <div className={classes.searchboxFrame}>
              <p>Subscribe to stay tuned for latest updates.</p>
              <div className={classes.searchbox}>
                <input type="text" placeholder="Enter your email address to join our newletter" />
                <button>Join</button>
              </div>
            </div>
            <div className={classes.contents}>
              <p>Help</p>
              <p>Terms of use</p>
              <p>Privacy policy</p>
            </div>
          </div>

          <div className={classes.contentBoxFrame}>
            <p>Payfees is a global payment solutions platform on a mission to improve the tuition payment experience for international students and eliminate transaction limitations.</p>
            <p>PayFees Inc. is a registered company in Canada.Registration Number: 1504769-2.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
