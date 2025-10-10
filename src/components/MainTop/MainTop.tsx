import { useState } from "react";
import { Button, Group, TextInput, Title } from "@mantine/core";
import { useAppDispatch } from "../../hooks/redux";
import {
  setSearchParams,
  fetchVacancies,
} from "../../store/slices/vacanciesSlice";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import styles from "./MainTop.module.scss";

export function MainTop() {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    dispatch(setSearchParams({ text: searchText }));
    dispatch(
      fetchVacancies({
        text: searchText,
        industry: "7",
        professional_role: "96",
        per_page: 10,
      })
    );
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Group className={styles.mainTopContainer}>
      <Title order={1} className={styles.mainTopTitle}>
        Список вакансий
        <span className={styles.mainTopTitleAccentColor}>
          по профессии Frontend-разработчик
        </span>
      </Title>
      <div className={styles.mainTopFormSearchContainer}>
        <TextInput
          placeholder="Должность или название компании"
          className={styles.mainTopFormSearchInput}
          value={searchText}
          onChange={(event) => setSearchText(event.currentTarget.value)}
          onKeyPress={handleKeyPress}
          leftSection={<SearchIcon className={styles.mainTopFormIconSearch} />}
          classNames={{
            input: styles.searchInput,
            section: styles.searchIcon,
          }}
        />
        <Button
          className={styles.mainTopFormSearchButton}
          onClick={handleSearch}
        >
          Найти
        </Button>
      </div>
    </Group>
  );
}
