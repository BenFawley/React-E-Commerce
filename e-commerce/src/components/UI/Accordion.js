import { useEffect, useState } from "react";
import classes from "./Accordion.module.css";

const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (title === "Description") {
      setActive(true);
    }
  }, []);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className={`${classes.accordion} ${active ? classes.active : ""}`}>
      <h3 className={classes.accordionTitle} onClick={toggleAccordion}>
        {title}
      </h3>
      <p className={classes.accordionContent}>{content}</p>
    </div>
  );
};

export default Accordion;
