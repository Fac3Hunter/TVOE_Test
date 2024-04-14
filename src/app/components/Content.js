import News from "./News";
import Promos from "./Promos";
import Weeklys from "./Weeklys";
import styles from "./styles/content.module.scss";

const Content = () => {
  return (
    <div className={styles.block}>
      <News />
      <Promos />
      <Weeklys />
    </div>
  );
};

export default Content;
