import classes from "./Footer.module.css";

const Footer = () => {
  //footer links are redundant - split to component
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerLogo}>
          <h1>
            Apparel<span>Store</span>
          </h1>
        </div>
        <div className={classes.footerLinksWrapper}>
          <div className={classes.footerLinks}>
            <h3>More Information</h3>
            <ul>
              <li>Help</li>
              <li>Track Order</li>
              <li>Delivery & Returns</li>
            </ul>
          </div>
          <div className={classes.footerLinks}>
            <h3>More Information</h3>
            <ul>
              <li>Help</li>
              <li>Track Order</li>
              <li>Delivery & Returns</li>
            </ul>
          </div>
          <div className={classes.footerLinks}>
            <h3>Contact Us</h3>
            <ul>
              <li>Help</li>
              <li>Track Order</li>
              <li>Delivery & Returns</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
