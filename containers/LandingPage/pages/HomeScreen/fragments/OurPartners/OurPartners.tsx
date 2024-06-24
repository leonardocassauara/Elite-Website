import Title from "@/components/Title/Title";
import styles from "./OurPartners.module.css";
import Image from "next/image";

export default function OurPartners() {
  return (
    <section aria-labelledby="title-partners">
      <div className={styles["background-container"]}>
        <div className={styles["title-container"]}>
          <Title
            id="title-partners"
            text="NOSSOS PARCEIROS"
            pseudo
            color="#000000"
          />
        </div>
      </div>
      <div className={styles["background-container"]}>
        <div className={styles["partners-container"]}>
          <div className={styles["image-container"]}>
            <Image
              src="/img/dunlop.png"
              width={257}
              height={60}
              alt="Logo Pneus Dunlop"
              className={styles["image"]}
            />
          </div>
          <div className={styles["image-container"]}>
            <Image
              src="/img/strong.png"
              width={257}
              height={60}
              alt="Logo Pneus Dunlop"
              className={styles["image"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
