import styles from "./styles/series.module.scss";

const Series = ({ name, viewed, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles["image-wrapper"]}>
        <div className={styles.time}>43:54</div>
        <img className={styles.image} src={imageUrl} alt="Image"></img>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        {viewed && <div className={styles.viewed}>Просмотрено</div>}
      </div>
    </div>
  );
};

export default Series;
