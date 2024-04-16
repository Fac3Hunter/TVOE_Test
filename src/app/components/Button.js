import styles from "./styles/button.module.scss";

const Button = ({ text, style }) => {
  return (
    <a
      href="/movie"
      className={`${styles.button} ${style == "gradient" && styles.gradient} ${
        style == "grey" && styles.grey
      }`}
    >
      {text}
    </a>
  );
};

export default Button;
