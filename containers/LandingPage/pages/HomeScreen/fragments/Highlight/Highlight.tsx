import Title from "@/components/Title/Title";
import styles from "./Highlight.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { highlightProducts } from "@/data/highlightProducts";

// TODO: Substituir mock por um read do realtime database do Firebase
export default function Highlight() {
  const data = highlightProducts;

  return (
    <section aria-labelledby="title-highlight">
      <div
        className={`${styles["background-container"]} + " " + ${styles["top"]}`}
      >
        <div className={styles["title-container"]}>
          <Title id="title-highlight" text="PROMOÇÕES" color="#000000" pseudo />
        </div>
      </div>
      <div
        className={`${styles["background-container"]} + " " + ${styles["bot"]}`}
      >
        <div className={styles["card-container"]}>
          {data.map(({ id, name, price }) => {
            return (
              <ProductCard
                href={"./" + id + "/" + name}
                key={id}
                id={id}
                name={name}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
