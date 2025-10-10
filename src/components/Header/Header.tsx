import { AppShell, Group, NavLink } from "@mantine/core";
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
            <NavLink
              href="/link1"
              label="Вакансии FE"
              className={`${styles.headerLink} ${styles.headerLinkActive}`}
            />
            <NavLink
              href="/link2"
              label="Обо&nbsp;мне"
              leftSection={<UserIcon />}
              className={styles.headerLink}
            />
          </Group>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
}
