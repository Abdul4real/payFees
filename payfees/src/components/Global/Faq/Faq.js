import classes from "./Faq.module.css";
import AddPlusSVG from "../../../svgs/AddPlus";

const faqArr = [
  "What is Payfees.co?",
  "Can I pay with Naira?",
  "What countries can I make payment to through Payfees?",
  "What is the transaction limit?",
  "What is the transaction processing time?",
  "How safe is Payfees?",
  "How do I track my payment?",
  "How do I get started?",
  "How do I contact support?",
];

const Faq = () => {
  return (
    <section  id= "FAQ" className={classes.sectionH}>
      <div className={classes.sectionH_Container}>
        <h1>Some frequently asked questions</h1>
        <div>
          {faqArr.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
                <AddPlusSVG />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Faq;
