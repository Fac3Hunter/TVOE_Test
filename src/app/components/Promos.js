import Button from "./Button";
import styles from "./styles/promos.module.scss";

const Promos = () => {
  return (
    <div className={styles.promo}>
      <h1>СМОТРИ ЗАРУБЕЖНОЕ КИНО</h1>
      <Button text="Смотреть 7 дней за 0₽" gradient />
    </div>
  );
};

export default Promos;
