import classes from "./Navbar.module.css";
import LogoSvg from "../../../svgs/LogoSvg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  
  return (
    <nav className={`${classes.nav} ${props.payFormPg && classes.removeBg}`}>
      <div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}>
          <LogoSvg className={classes.svg} />
        </div>

        <div className={classes.navLinks}>
          <div className={`${props.payFormPg && classes.colored}`}>
            <Link to="#">About us</Link>
            <a href="#secE"onClick={() => {
              navigate("/");
            }} >How it works</a>
            <a href="#secC"onClick={() => {
              navigate("/");
            }} >Resources</a>
            <a href="#secH" onClick={() => {
              navigate("/");
            }}>FAQ</a>
            <Link to="/contact">Support</Link>
          </div>
          <button
            onClick={() => {
              navigate("/track-payments");
            }}>
            Track payment
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
