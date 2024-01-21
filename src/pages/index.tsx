import Head from "next/head";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import heroImg from "@/../public/assets/hero.png";

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>TasksPlus | Easily tasks organizer</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Tasks plus Logo"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          System made to you organize your <br />
          profissional and personal tasks
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+90 comments</span>
          </section>
        </div>
      </main>
    </div>
  );
}
