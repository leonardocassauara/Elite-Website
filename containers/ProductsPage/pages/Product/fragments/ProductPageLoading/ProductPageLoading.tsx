import Image from "next/image";
import styles from "./ProductPageLoading.module.css";

export default function ProductPageLoading() {
  return (
    <>
      <div className={styles["image-container"]}></div>
      <div className={styles["text-container"]}>
        <div className={styles["loading-name"]}></div>
        <div className={styles["loading-price"]}></div>
        <div className={styles["loading-button"]}></div>
      </div>
    </>
  );
}
