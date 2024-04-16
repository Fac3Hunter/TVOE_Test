import styles from "./styles/rating.module.scss";

const Rating = ({ value, fontSize = "16px" }) => {
  return (
    <div className={styles.rate} style={{ fontSize: fontSize }}>
      {value}
    </div>
  );
};

export default Rating;
