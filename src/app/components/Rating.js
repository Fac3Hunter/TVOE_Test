import styles from "./styles/rating.module.scss";

const Rating = ({ value }) => {
  return <div className={styles.rate}>{value}</div>;
};

export default Rating;
