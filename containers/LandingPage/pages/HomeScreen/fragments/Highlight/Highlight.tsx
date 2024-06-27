"use client";

import Title from "@/components/Title/Title";
import styles from "./Highlight.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import highlightProducts from "@/data/highlightProducts";
import AdminPanelLink from "../AdminPanelLink/AdminPanelLink";
import { useEffect, useState } from "react";
import ProductLoading from "@/components/ProductLoading/ProductLoading";

type Data = {
  id: string;
  name: string;
  price: string;
};

// TODO: Substituir mock por um read do realtime database do Firebase
export default function Highlight() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await highlightProducts());
      } catch {
        console.error("Falha: recuperar dados.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section aria-labelledby="title-highlight">
      <div
        className={`${styles["background-container"]} + " " + ${styles["top"]}`}
      >
        <div className={styles["title-container"]}>
          <Title id="title-highlight" text="PROMOÇÕES" color="#000000" pseudo />
          <AdminPanelLink />
        </div>
      </div>
      <div
        className={`${styles["background-container"]} + " " + ${styles["bot"]}`}
      >
        <ul className={styles["card-container"]}>
          {loading ? (
            <>
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
            </>
          ) : (
            data?.map(({ id, name, price }: Data) => {
              return (
                <ProductCard
                  href={
                    "/" +
                    "produtos" +
                    "/" +
                    "strong" +
                    "/" +
                    id +
                    "/" +
                    name.replaceAll("/", "-").replaceAll(" ", "-").toLowerCase()
                  }
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                />
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
}
