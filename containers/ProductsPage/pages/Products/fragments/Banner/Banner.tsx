import Title from "@/components/Title/Title";
import styles from "./Banner.module.css";
import includesTire from "@/utils/includesTire";

type AppProps = {
  text: string;
};

export default function Banner({ text }: AppProps) {
  let prefix;
  if (includesTire(text.toLowerCase())) {
    prefix = "PNEUS ";
  } else {
    prefix = "";
  }

  return (
    <div className={styles["background-container"]}>
      <div className={styles["title-container"]}>
        <Title text={prefix + text} color="#ffffff" />
      </div>
    </div>
  );
}
