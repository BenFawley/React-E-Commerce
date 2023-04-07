import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerWrapper}>
      <div className={classes.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
