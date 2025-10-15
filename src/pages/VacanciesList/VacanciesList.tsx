import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppShell, ScrollArea, LoadingOverlay } from "@mantine/core";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  fetchVacancies,
  setSearchParams as setReduxSearchParams,
} from "../../store/slices/vacanciesSlice";
import { ListOfVacancies } from "../../components/ListOfVacancies/ListOfVacancies";
import styles from "./VacanciesList.module.scss";

interface VacanciesListProps {
  city: string;
}

export function VacanciesList({ city }: VacanciesListProps) {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.vacancies);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const text = searchParams.get("text") || "";
    const skill_set = searchParams.getAll("skill_set");

    const params = {
      industry: "7",
      professional_role: "96",
      per_page: 10,
      area: city,
      ...(text && { text }),
      ...(skill_set.length > 0 && { skill_set }),
    };

    dispatch(setReduxSearchParams(params));
    dispatch(fetchVacancies(params));
  }, [dispatch, searchParams, city]);

  return (
    <AppShell className={styles.vacanciesContainer}>
      <AppShell.Section
        grow
        component={ScrollArea}
        className={styles.vacanciesSection}
      >
        <LoadingOverlay visible={loading} zIndex={1000} />
        <ListOfVacancies vacancies={items} loading={loading} error={error} />
      </AppShell.Section>
    </AppShell>
  );
}
