import { AppShell, Group } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../assets/icons/Logo";
import { UserIcon } from "../../assets/icons/UserIcon";
import "../../styles/reset.scss";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={styles.header}>
        <Group className={styles.headerContainer}>
          <a href="#">
            <Logo className={styles.headerLogo} />
          </a>
          <Group className={styles.headerNavigation}>
            {(() => {
              const location = useLocation();
              const isVacancies = location.pathname.startsWith("/vacancies");
              const isAbout = location.pathname === "/about";

              return (
                <>
                  <Link
                    to="/vacancies"
                    className={`${styles.headerLink} ${
                      isVacancies ? styles.headerLinkActive : ""
                    }`}
                  >
                    Вакансии FE
                  </Link>
                  <Link
                    to="/about"
                    className={`${styles.headerLink} ${
                      isAbout ? styles.headerLinkActive : ""
                    }`}
                  >
                    <UserIcon />
                    <span>Обо&nbsp;мне</span>
                  </Link>
                </>
              );
            })()}
          </Group>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
}
