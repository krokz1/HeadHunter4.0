import { useEffect } from "react";
import { AppShell } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { fetchVacancies } from "../store/slices/vacanciesSlice";
import styles from "./Vacancy.module.scss";
import { Header } from "../components/Header/Header";
import { MainTop } from "../components/MainTop/MainTop";
import { ListOfVacancies } from "../components/ListOfVacancies/ListOfVacancies";
import { SkillsInput } from "../components/Filter/Filter";

export function VacancyPageLayout() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.vacancies);

  useEffect(() => {
    dispatch(
      fetchVacancies({
        industry: "7",
        professional_role: "96",
        per_page: 10,
      })
    );
  }, [dispatch]);

  return (
    <AppShell className={styles.vacancyLayout}>
      <Header />
      <main className={styles.main}>
        <MainTop />
        <SkillsInput />
        <ListOfVacancies vacancies={items} loading={loading} error={error} />
      </main>
    </AppShell>
  );
}
