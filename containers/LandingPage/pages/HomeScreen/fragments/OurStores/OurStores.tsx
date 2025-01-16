import Title from "@/components/Title/Title";
import styles from "./OurStores.module.css";
import Image from "next/image";

export default function OurStores() {
  return (
    <section className={styles["background"]} aria-labelledby="title-stores">
      <div className={styles["background-container"]}>
        <div className={styles["title-container"]}>
          <Title
            id="title-stores"
            text="NOSSAS UNIDADES"
            pseudo
            color="#ffffff"
          />
        </div>
      </div>
      <div className={styles["background-container"]}>
        <div className={styles["image-container"]}>
          <div className={styles["pseudo-container"]}>
            <span className={styles["pseudo"]}>
              Av. Areia Branca, 2080 - Santa Cruz, Rio de Janeiro
            </span>
            <Image
              src="/img/storeA.png"
              width={500}
              height={662}
              alt="Unidade Areia Branca"
              className={styles["image"]}
            />
          </div>

          <div className={styles["pseudo-container"]}>
            <span className={styles["pseudo"]}>
              Av. Padre Guilherme Decaminada, 1170 - Santa Cruz, Rio de Janeiro
            </span>
            <Image
              src="/img/storeB.png"
              width={559}
              height={740}
              alt="Unidade Padre Guilherme"
              className={styles["image"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
