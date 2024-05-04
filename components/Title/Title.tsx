import styles from "./Title.module.css";

type AppProps = {
  text: string;
  pseudo?: boolean;
  color: "#000000" | "#ffffff";
};

export default function Title({ text, pseudo = false, color }: AppProps) {
  if (pseudo)
    return (
      <>
        <h1
          className={`${styles["title"]}` + " " + `${styles["pseudo"]}`}
          style={{ color: color }}
        >
          {text}
        </h1>
      </>
    );
  else
    return (
      <>
        <h1 className={styles["title"]} style={{ color: color }}>
          {text}
        </h1>
      </>
    );
}
