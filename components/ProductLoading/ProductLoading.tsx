import styles from "./ProductLoading.module.css";
import Image from "next/image";

export default function ProductLoading() {
  return (
    <li className={styles["main-container"]}>
      <Image
        src="/img/product.png"
        width={318}
        height={345}
        alt="Produto em destaque"
        className={styles["image"]}
      />
    </li>
  );
}
