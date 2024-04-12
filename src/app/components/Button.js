import styles from "./styles/button.module.scss";

const Button = ({ text, gradient }) => {
  return (
    <a href="/" className={`${styles.button} ${gradient && styles.gradient}`}>
      {text}
    </a>
  );
};

export default Button;
