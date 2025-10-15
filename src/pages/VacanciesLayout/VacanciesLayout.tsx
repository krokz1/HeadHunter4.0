import { useEffect } from "react";
import {
  useSearchParams,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AppShell, Tabs } from "@mantine/core";
import { useAppDispatch } from "../../hooks/redux";
import { setSearchParams as setReduxSearchParams } from "../../store/slices/vacanciesSlice";
import styles from "./VacanciesLayout.module.scss";
import { MainTop } from "../../components/MainTop/MainTop";
import { SkillsInput } from "../../components/Filter/Filter";

export function VacanciesLayout() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = location.pathname.includes("petersburg")
    ? "petersburg"
    : "moscow";

  useEffect(() => {
    const text = searchParams.get("text") || "";
    const skill_set = searchParams.getAll("skill_set");

    const params = {
      industry: "7",
      professional_role: "96",
      per_page: 10,
      ...(text && { text }),
      ...(skill_set.length > 0 && { skill_set }),
    };

    dispatch(setReduxSearchParams(params));
  }, [dispatch, searchParams]);

  const handleTabChange = (value: string | null) => {
    if (value === "moscow") {
      navigate("/vacancies/moscow");
    } else if (value === "petersburg") {
      navigate("/vacancies/petersburg");
    }
  };

  return (
    <AppShell className={styles.vacancyLayout}>
      <main className={styles.main}>
        <MainTop />
        <SkillsInput />

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          className={styles.tabsContainer}
        >
          <Tabs.List grow className={styles.tabsList}>
            <Tabs.Tab value="moscow" className={styles.tab}>
              Москва
            </Tabs.Tab>
            <Tabs.Tab value="petersburg" className={styles.tab}>
              Санкт-Петербург
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Outlet />
      </main>
    </AppShell>
  );
}
