import styles from "./FooterSection.module.css";

type AppProps = {
  title: string;
  children: React.ReactNode;
};

export default function FooterSection({ title, children }: AppProps) {
  return (
    <>
      <section className={styles["content-container"]}>
        <h3 className={"title-s"}>{title}</h3>
        <div className={styles["child-container"]}>{children}</div>
      </section>
    </>
  );
}
