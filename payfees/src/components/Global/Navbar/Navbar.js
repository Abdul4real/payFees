import classes from "./Navbar.module.css";
import LogoSvg from "../../../svgs/LogoSvg";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <LogoSvg className={classes.svg} />
        <div className={classes.navLinks}>
          <div>
            <a href="/#">About us</a>
            <a href="/#">How it works</a>
            <a href="/#">Resources</a>
            <a href="/#">FAQ</a>
            <a href="/Contact">Support</a>
          </div>
          <button>Track payment</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
