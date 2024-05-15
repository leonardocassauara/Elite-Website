import Image from "next/image";
import styles from "./Banner.module.css";

// TODO: avaliar uso do <picture> para imagem do banner em dispositivos móveis
export default function Banner() {
  return (
    <>
      <div className={styles["background-container"]}>
        <div className={styles["content-container"]}>
          <Image
            src="/img/banner.png"
            width={1200}
            height={360}
            className={styles["banner"]}
            alt="Banner promocional"
            sizes="(max-width: 768px) 768px, (maxwidth: 1024px) 1024px, 100%"
            priority
          />
        </div>
      </div>
    </>
  );
}
