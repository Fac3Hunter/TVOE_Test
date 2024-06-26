import Review from "./Review";
import styles from "./styles/reviews.module.scss";

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rating}>
        <div>Рейтинг TVOЁ 8.4</div>
        <div className={styles.rate}>Поставить оценку</div>
      </div>
      <div className={styles.header}>
        Отзывы{" "}
        <div>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.94271 16.1093L9.55204 8.49996L1.94271 0.890625L0.057373 2.77596L5.78137 8.49996L0.057373 14.224L1.94271 16.1093Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={styles.reviews}>
        <Review
          comment={`
        Как по мне, обсуждать качество сериала довольно глупо. Субъективно
        для меня — оно очевидно плохого уровня. Это ни капельки не похоже
        на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие
        оригинальности в сюжете и персонажах делает сериал предсказуемым
        и скучным. В общем, «Ведьмак» - это просто пустая траты времени
        и потерянный потенциал. Я разочарован и не рекомендую этот сериал
        никому.`}
        />
        <Review
          comment={`
      Как по мне, обсуждать качество сериала довольно глупо. Субъективно
      для меня — оно очевидно плохого уровня. Это ни капельки не похоже
      на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие
      оригинальности в сюжете и персонажах делает сериал предсказуемым
      и скучным. В общем, «Ведьмак» - это просто пустая траты времени
      и потерянный потенциал. Я разочарован и не рекомендую этот сериал
      никому.`}
        />
        <Review
          comment={`
    Как по мне, обсуждать качество сериала довольно глупо. Субъективно
    для меня — оно очевидно плохого уровня. Это ни капельки не похоже
    на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие
    оригинальности в сюжете и персонажах делает сериал предсказуемым
    и скучным. В общем, «Ведьмак» - это просто пустая траты времени
    и потерянный потенциал. Я разочарован и не рекомендую этот сериал
    никому.`}
        />
        <Review
          comment={`
  Как по мне, обсуждать качество сериала довольно глупо. Субъективно
  для меня — оно очевидно плохого уровня. Это ни капельки не похоже
  на Ведьмака, к которому мы привыкли в играх и книгах. Отсутствие
  оригинальности в сюжете и персонажах делает сериал предсказуемым
  и скучным. В общем, «Ведьмак» - это просто пустая траты времени
  и потерянный потенциал. Я разочарован и не рекомендую этот сериал
  никому.`}
        />
      </div>
    </div>
  );
};

export default Reviews;
