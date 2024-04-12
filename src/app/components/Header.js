import "normalize.css";
import styles from "./styles/header.module.scss";
import Button from "./Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <svg
          width="32"
          height="50"
          viewBox="0 0 32 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 14L32 36L0 50L2.18557e-06 0L32 14Z" fill="white" />
          <path
            d="M24 4.5V9.59375L16 6.0625V1.39876e-06L24 4.5Z"
            fill="white"
          />
          <path d="M32 9V13.125L25 10.0352V5.0625L32 9Z" fill="white" />
        </svg>
        <h1>TVOЁ</h1>
      </a>

      <div className={styles.menu}>
        <div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1954 21.8613C13.562 21.8608 15.8604 21.0686 17.7247 19.6107L23.586 25.472L25.4714 23.5867L19.61 17.7253C21.0687 15.8609 21.8615 13.5619 21.862 11.1947C21.862 5.31332 17.0767 0.527985 11.1954 0.527985C5.31402 0.527985 0.528687 5.31332 0.528687 11.1947C0.528687 17.076 5.31402 21.8613 11.1954 21.8613ZM11.1954 3.19465C15.6074 3.19465 19.1954 6.78265 19.1954 11.1947C19.1954 15.6067 15.6074 19.1947 11.1954 19.1947C6.78335 19.1947 3.19535 15.6067 3.19535 11.1947C3.19535 6.78265 6.78335 3.19465 11.1954 3.19465Z"
              fill="#BABABA"
            />
          </svg>
        </div>
      </div>

      <div>
        <Button text="7 дней за 0 ₽" gradient={true} />
        <Button text="Промокод" gradient={false} />
        <a href="/" className={styles.register}>
          Войти
        </a>
      </div>
    </header>
  );
};

export default Header;
