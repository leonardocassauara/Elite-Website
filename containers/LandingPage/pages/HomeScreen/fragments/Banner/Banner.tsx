import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <>
      <div className={styles["background-container"]}>
        <div className={styles["content-container"]}>
          <Image
            src="/img/banner goodyear pc.png"
            width={1200}
            height={360}
            className={styles["banner-pc"]}
            alt="Banner promocional"
            sizes="(max-width: 768px) 768px, (maxwidth: 1024px) 1024px, 100%"
            priority
          />
          <Image
            src="/img/banner goodyear mobile.png"
            width={1080}
            height={1080}
            className={styles["banner-mobile"]}
            alt="Banner promocional"
            priority
          />
        </div>
      </div>
    </>
  );
}
