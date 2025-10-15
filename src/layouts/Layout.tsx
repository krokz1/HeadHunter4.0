import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { Header } from "../components/Header/Header";
import styles from "./Layout.module.scss";

export function Layout() {
  return (
    <AppShell className={styles.appShell}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </AppShell>
  );
}

export default Layout;
