import Title from "@/components/Title/Title";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <>
      <div className={styles["background-container"]}>
        <div className={styles["title-container"]}>
          <Title text="CONTATO" color="#ffffff" />
        </div>
      </div>
    </>
  );
}
