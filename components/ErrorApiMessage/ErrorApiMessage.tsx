import styles from "./ErrorApiMessage.module.css";
import Image from "next/image";

export default function ErrorApiMessage() {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <Image
          src="/svg/error.svg"
          width={256}
          height={256}
          alt=""
          className={styles["icon"]}
        />
        <p className={styles["title"]}>Eita, alguma coisa deu errado.</p>
        <p className={styles["description"]}>
          Desculpe pelo incoveniente. Tente novamente mais tarde.
        </p>
      </div>
    </div>
  );
}
