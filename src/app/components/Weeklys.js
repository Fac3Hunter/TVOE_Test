import styles from "./styles/weeklys.module.scss";

const Weeklys = () => {
  return (
    <div>
      <h1>ТОП НЕДЕЛИ</h1>
      <div className={styles.block}>
        <div className={styles.point}>
          <div className={styles.pointContainer}>
            <img className={styles.number} src="/assets/1.png" alt="Image" />
            <img className={styles.image} src="/assets/11.png" alt="Image" />
          </div>
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/2.png" alt="Image" />
          <img className={styles.image} src="/assets/22.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/3.png" alt="Image" />
          <img className={styles.image} src="/assets/33.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/4.png" alt="Image" />
          <img className={styles.image} src="/assets/44.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/5.png" alt="Image" />
          <img className={styles.image} src="/assets/55.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/6.png" alt="Image" />
          <img className={styles.image} src="/assets/66.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/7.png" alt="Image" />
          <img className={styles.image} src="/assets/77.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/8.png" alt="Image" />
          <img className={styles.image} src="/assets/88.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/9.png" alt="Image" />
          <img className={styles.image} src="/assets/99.png" alt="Image" />
        </div>
        <div className={styles.point}>
          <img className={styles.number} src="/assets/10.png" alt="Image" />
          <img className={styles.image} src="/assets/1010.png" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Weeklys;
