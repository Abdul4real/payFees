import classes from "./PreFooter.module.css";
import CollegeStudentSecI from "../../../svgs/college-student.png";

const PreFooter = () => {
  return (
    <section className={classes.sectionI}>
      <div className={classes.sectionI_Container}>
        <img src={CollegeStudentSecI} alt="" srcset="" />
        <div>
          <h1>Ready to embrace a future without boundaries?</h1>
          <button>Get started</button>
        </div>
      </div>
    </section>
  );
};
export default PreFooter;
