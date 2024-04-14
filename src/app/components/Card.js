import Rating from "./Rating";
import styles from "./styles/card.module.scss";

const Card = ({ imageUrl, name, rating, newSeason, premiere }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles["rating-wrapper"]}>
          <Rating value={rating} />
        </div>

        <div className={styles.optional}>
          {newSeason && <div className={styles["new-season"]}>Новый сезон</div>}
          {premiere && <div className={styles.premiere}>Премьера</div>}
        </div>
        <img className={styles.image} src={imageUrl} alt="Image" />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.stats}>2022, 2 часа 37 мин</div>
    </div>
  );
};

export default Card;
