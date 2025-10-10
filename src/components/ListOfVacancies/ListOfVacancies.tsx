import {
  AppShell,
  Group,
  ScrollArea,
  LoadingOverlay,
  Button,
} from "@mantine/core";
import { VacanciesCard } from "./VacanciesCard/VacanciesCard";
import { Paginations } from "../Pagination/Paginations";
import type { IVacancy } from "../../types/index";
import styles from "./ListOfVacancies.module.scss";

interface ListOfVacanciesProps {
  vacancies: IVacancy[];
  loading: boolean;
  error: string | null;
}

export function ListOfVacancies({
  vacancies,
  loading,
  error,
}: ListOfVacanciesProps) {
  if (error) {
    return (
      <AppShell className={styles.vacanciesContainer}>
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
            <Button className={styles.vacanciesErrorButton}>На главную</Button>
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
      </AppShell>
    );
  }

  return (
    <AppShell className={styles.vacanciesContainer}>
      <AppShell.Section
        grow
        component={ScrollArea}
        className={styles.vacanciesSection}
      >
        <LoadingOverlay visible={loading} zIndex={1000} />
        <Group className={styles.vacanciesCardList}>
          {vacancies.map((vacancy) => (
            <VacanciesCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </Group>
      </AppShell.Section>
      <Paginations />
    </AppShell>
  );
}
