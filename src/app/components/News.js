import Card from "./Card";
import styles from "./styles/news.module.scss";

const News = () => {
  return (
    <div className={styles.block}>
      <h1>Новинки</h1>
      <div className={styles.cardsContainer}>
        <Card name="На грани" rating="8,9" imageUrl="../assets/na_grani.png" />
        <Card
          name="8 подруг Оушена"
          rating="8,2"
          imageUrl="../assets/oushen.png"
          premiere
        />
        <Card
          name="Нэнси Дрю"
          rating="9,0"
          newSeason
          imageUrl="../assets/nensi.png"
        />
        <Card
          name="На западном фронте без перемен"
          rating="7,9"
          imageUrl="../assets/front.png"
          premiere
        />
        <Card
          name="Аватар. Путь воды"
          rating="9,9"
          imageUrl="../assets/avatar_water.png"
          premiere
        />
        <Card
          name="Аватар. Путь воды"
          rating="9,9"
          imageUrl="../assets/avatar_water.png"
          premiere
        />
      </div>
    </div>
  );
};

export default News;
