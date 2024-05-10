import Title from "@/components/Title/Title";
import styles from "./Highlight.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";

// TODO: Substituir mock por um read do realtime database do Firebase

export default function Highlight() {
  // * Mock
  const data = [
    { id: "1", name: "Pneu Dunlop", price: "199" },
    { id: "2", name: "Pneu Strong", price: "199" },
    { id: "3", name: "Motor Aud", price: "1240" },
  ];

  return (
    <>
      <div
        className={`${styles["background-container"]} + " " + ${styles["top"]}`}
      >
        <div className={styles["title-container"]}>
          <Title text="PROMOÇÕES" color="#000000" pseudo />
        </div>
      </div>
      <div
        className={`${styles["background-container"]} + " " + ${styles["bot"]}`}
      >
        <div className={styles["card-container"]}>
          {data.map(({ id, name, price }) => {
            return <ProductCard key={id} id={id} name={name} price={price} />;
          })}
        </div>
      </div>
    </>
  );
}
