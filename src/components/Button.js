import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button ref={props.theRef} className={styles.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
