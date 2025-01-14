import styles from "./PageNotFound.module.css";
import Image from "next/image";

export default function PageNotFound() {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <Image
          src="/svg/notfound.svg"
          width={256}
          height={256}
          alt=""
          className={styles["icon"]}
        />
        <p className={styles["title"]}>Hmm, onde a gente ta?</p>
        <p className={styles["description"]}>
          Parece que essa página não existe.
        </p>
      </div>
    </div>
  );
}
