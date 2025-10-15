import { AppShell, ScrollArea, LoadingOverlay } from "@mantine/core";
import { VacanciesCard } from "./VacanciesCard/VacanciesCard";
import { Paginations } from "../Pagination/Paginations";
import type { IVacancy } from "../../types/index";
import styles from "./ListOfVacancies.module.scss";

interface ListOfVacanciesProps {
  vacancies: IVacancy[];
  loading: boolean;
  error: string | null;
}

export function ListOfVacancies({ vacancies, loading }: ListOfVacanciesProps) {
  return (
    <AppShell className={styles.vacanciesContainer}>
      <AppShell.Section
        grow
        component={ScrollArea}
        className={styles.vacanciesSection}
      >
        <LoadingOverlay visible={loading} zIndex={1000} />
        <div className={styles.vacanciesCardList}>
          {vacancies.map((vacancy) => (
            <VacanciesCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
      </AppShell.Section>
      <Paginations />
    </AppShell>
  );
}
