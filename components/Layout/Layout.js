import Link from "next/link";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CAR-APP</h2>
          <p>Choose An Buy Youre Car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>Develoaped by Yasin!</footer>
    </>
  );
}

export default Layout;
