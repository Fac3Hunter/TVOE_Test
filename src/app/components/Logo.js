import styles from "./styles/header.module.scss";

const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <svg
        width="32"
        height="50"
        viewBox="0 0 32 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 14L32 36L0 50L2.18557e-06 0L32 14Z" fill="white" />
        <path d="M24 4.5V9.59375L16 6.0625V1.39876e-06L24 4.5Z" fill="white" />
        <path d="M32 9V13.125L25 10.0352V5.0625L32 9Z" fill="white" />
      </svg>
      <h1>TVOЁ</h1>
    </a>
  );
};

export default Logo;
