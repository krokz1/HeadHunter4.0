import { Container, Button, Group } from "@mantine/core";
import { Header } from "../../components/Header/Header";
import styles from "./NotFoundPage.module.scss";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className={styles.notFoundContainer}>
        <Container>
          <Group className={styles.vacanciesError}>
            <div className={styles.vacanciesErrorInfo}>
              <div className={styles.vacanciesErrorTextContainer}>
                <h2 className={styles.vacanciesErrorTitle}>
                  Упс! Такой страницы не существует
                </h2>
                <p className={styles.vacanciesErrorText}>
                  Давайте перейдём к началу.
                </p>
              </div>
              <Button className={styles.vacanciesErrorButton}>
                На главную
              </Button>
            </div>
            <div
              className="tenor-gif-embed"
              data-postid="12536795"
              data-share-method="host"
              data-aspect-ratio="1.90476"
              data-width="100%"
            >
              <a href="https://tenor.com/view/sad-cat-lonely-upset-crying-gif-12536795">
                печальный кот плачет грустный GIF
              </a>
              from <a href="https://tenor.com/search/sad-gifs">Sad GIFs</a>
            </div>{" "}
            <script
              type="text/javascript"
              async
              src="https://tenor.com/embed.js"
            ></script>
          </Group>
        </Container>
      </main>
    </>
  );
}
