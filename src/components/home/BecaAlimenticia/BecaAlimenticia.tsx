import styles from "./BecaAlimenticia.module.sass";
import Image from "next/image";

export const BecaAlimenticia = () => {
  return (
    <section className={styles.beca}>
      <h1 className={styles.becaTitle}>Lorem ipsum dolor</h1>
      <div className={styles.becaContainer}>
        <div className={styles.becaContainer__content}>
          <p>Lorem ipsum dolor sit amet </p>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill="#42ff00" />
          </svg>
        </div>
        <div className={styles.becaContainer__content}>
          <p>Lorem ipsum dolor sit amet </p>
          <p></p>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill="#42ff00" />
          </svg>
        </div>
        <div className={styles.becaContainer__content}>
          <p>Lorem ipsum dolor sit amet </p>
          <p></p>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill="#42ff00" />
          </svg>
        </div>
        <div className={styles.becaContainer__content}>
          <p>Lorem ipsum dolor sit amet </p>
          <p></p>
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill="#42ff00" />
          </svg>
        </div>
      </div>
    </section>
  );
};
