import Button from "./Button";
import styles from "./styles/promos.module.scss";

const Promos = () => {
  return (
    <div className={styles.promo}>
      <div className={styles["mobile-block"]}>
        <h1 className={styles["offer-text"]}>СМОТРИ ЗАРУБЕЖНОЕ КИНО</h1>
        <div className={styles.points}>
          <div className={styles.column}>
            <div className={styles.point}>
              <div className={styles.svgWrapper}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H17.307C17.7139 20.9986 18.1108 20.8738 18.4452 20.6421C18.7797 20.4103 19.0359 20.0825 19.18 19.702L21.937 12.351C21.9789 12.2387 22.0002 12.1198 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C12.0013 8.83331 11.9871 8.99355 12.0107 9.15043C12.0343 9.3073 12.095 9.45629 12.1877 9.58504C12.2803 9.71379 12.4024 9.8186 12.5436 9.89076C12.6849 9.96293 12.8414 10.0004 13 10H20V11.819Z"
                    fill="#BC88FF"
                  />
                </svg>
              </div>
              <div>От 149 ₽ в месяц</div>
            </div>
            <div className={styles.point}>
              <div className={styles.svgWrapper}>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.25 0.75H1.75C1.35218 0.75 0.970644 0.908035 0.68934 1.18934C0.408035 1.47064 0.25 1.85218 0.25 2.25V15.75C0.25 16.1478 0.408035 16.5294 0.68934 16.8107C0.970644 17.092 1.35218 17.25 1.75 17.25H18.25C18.6478 17.25 19.0294 17.092 19.3107 16.8107C19.592 16.5294 19.75 16.1478 19.75 15.75V2.25C19.75 1.85218 19.592 1.47064 19.3107 1.18934C19.0294 0.908035 18.6478 0.75 18.25 0.75ZM1.75 5.25H9.25V12.75H1.75V5.25ZM10.75 3.75V2.25H13.75V3.75H10.75ZM9.25 3.75H6.25V2.25H9.25V3.75ZM9.25 14.25V15.75H6.25V14.25H9.25ZM10.75 14.25H13.75V15.75H10.75V14.25ZM10.75 12.75V5.25H18.25V12.75H10.75ZM18.25 3.75H15.25V2.25H18.25V3.75ZM4.75 2.25V3.75H1.75V2.25H4.75ZM1.75 14.25H4.75V15.75H1.75V14.25ZM18.25 15.75H15.25V14.25H18.25V15.75Z"
                    fill="#BC88FF"
                  />
                </svg>
              </div>
              <div>Никакой рекламы</div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.point}>
              <div className={styles.svgWrapper}>
                <svg
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.75 16C8.75 16.5523 8.30228 17 7.75 17C7.19771 17 6.75 16.5523 6.75 16C6.75 15.4477 7.19771 15 7.75 15C8.30228 15 8.75 15.4477 8.75 16Z"
                    fill="#BC88FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.75 0H12.75C13.853 0 14.75 0.897 14.75 2V18C14.75 19.103 13.853 20 12.75 20H2.75C1.647 20 0.75 19.103 0.75 18V2C0.75 0.897 1.647 0 2.75 0ZM2.75 2V18H12.752L12.75 2H2.75Z"
                    fill="#BC88FF"
                  />
                </svg>
              </div>
              <div>Доступно на любом устройстве</div>
            </div>
            <div className={styles.point}>
              <div className={styles.svgWrapper}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.51603 12.323L3.02603 18.775C2.97989 18.9704 2.99374 19.1751 3.06577 19.3625C3.1378 19.5499 3.26467 19.7112 3.4298 19.8253C3.59492 19.9395 3.79064 20.0012 3.99138 20.0024C4.19212 20.0036 4.38855 19.9442 4.55503 19.832L10 16.202L15.445 19.832C15.6154 19.9451 15.8162 20.0033 16.0207 19.9988C16.2251 19.9944 16.4232 19.9274 16.5884 19.8069C16.7536 19.6865 16.878 19.5183 16.9448 19.3251C17.0116 19.1318 17.0176 18.9228 16.962 18.726L15.133 12.326L19.669 8.244C19.8143 8.11319 19.9181 7.94266 19.9674 7.75351C20.0168 7.56436 20.0097 7.36488 19.9469 7.17974C19.8841 6.99461 19.7685 6.83193 19.6142 6.71183C19.46 6.59173 19.2739 6.51947 19.079 6.504L13.378 6.05L10.911 0.589002C10.8324 0.413158 10.7045 0.263838 10.5428 0.159062C10.3812 0.0542872 10.1927 -0.00146484 10 -0.00146484C9.80739 -0.00146484 9.61887 0.0542872 9.45722 0.159062C9.29556 0.263838 9.16769 0.413158 9.08903 0.589002L6.62203 6.05L0.921026 6.503C0.729482 6.51818 0.546364 6.58821 0.393581 6.70473C0.240798 6.82125 0.124819 6.97932 0.0595194 7.16003C-0.00578038 7.34074 -0.0176359 7.53644 0.0253712 7.72371C0.0683784 7.91098 0.164427 8.08189 0.302026 8.216L4.51603 12.323ZM7.36903 7.997C7.54752 7.98294 7.71895 7.92112 7.86533 7.81802C8.01171 7.71491 8.12766 7.57433 8.20103 7.411L10 3.43L11.799 7.411C11.8724 7.57433 11.9883 7.71491 12.1347 7.81802C12.2811 7.92112 12.4525 7.98294 12.631 7.997L16.603 8.312L13.332 11.256C13.048 11.512 12.935 11.906 13.039 12.274L14.292 16.659L10.556 14.168C10.392 14.0579 10.199 13.9992 10.0015 13.9992C9.80403 13.9992 9.61101 14.0579 9.44703 14.168L5.54303 16.771L6.59303 12.225C6.63153 12.0578 6.62636 11.8835 6.57802 11.7189C6.52969 11.5543 6.43981 11.4048 6.31703 11.285L3.27903 8.323L7.36903 7.997Z"
                    fill="#BC88FF"
                  />
                </svg>
              </div>
              <div>Единая подписка без доплат</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <Button text="Смотреть 7 дней за 0₽" style={"gradient"} />
          </div>
        </div>
      </div>
      <div className={styles.floatingText}>СУБТИТРЫ</div>
      <div className={styles.floatingText2}>ДУБЛЯЖ</div>
      <div className={styles.floatingText3}>FULL HD</div>
      <img src="/assets/popcorn.png" className={styles.popcorn}></img>
      <img src="/assets/lights.png" className={styles.lights}></img>
    </div>
  );
};

export default Promos;
