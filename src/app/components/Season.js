import Series from "./Series";
import styles from "./styles/season.module.scss";

const Season = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Трейлер</div>
        <div className={styles.chosen}>1 Сезон</div>
        <div>2 Сезон</div>
        <div>3 Сезон</div>
        <div>4 Сезон</div>
      </div>
      <div className={styles.content}>
        <Series name="1 Серия" viewed imageUrl="/assets/series1.png" />
        <Series name="2 Серия" viewed imageUrl="/assets/series1.png" />
        <Series name="3 Серия" viewed imageUrl="/assets/series1.png" />
        <Series name="4 Серия" viewed imageUrl="/assets/series1.png" />
      </div>
    </div>
  );
};

export default Season;
