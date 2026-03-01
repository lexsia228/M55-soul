import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import styles from "./core.module.css";

export const metadata = { title: "DTR | M55" };

export default async function DtrCorePage() {
  const { userId } = await auth();
  if (!userId) redirect("/dtr/lp");

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>DTR Core</h1>
        <p className={styles.desc}>保護コンテンツ（ログイン必須）</p>
      </div>
    </main>
  );
}