import styles from "./About.module.scss";

export function About() {
  return (
    <main className={styles.aboutMain}>
      <section className={styles.container}>
        <h1 className={styles.title}>Рогатин Николай</h1>
        <p className={styles.text}>
          Привет! Я - Frontend-разработчик. Пишу приложения на React +
          TypeScript + Redux Toolkit.
        </p>
      </section>
    </main>
  );
}

export default About;
