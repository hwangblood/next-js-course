import { Suspense } from "react";
import styles from "./styles.module.css";
import Loading from "./loading";

export const metadata = {
  title: "About Page",
  description: "Description for About Page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
