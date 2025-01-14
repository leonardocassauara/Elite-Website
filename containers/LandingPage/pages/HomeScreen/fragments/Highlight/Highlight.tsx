"use client";

import Title from "@/components/Title/Title";
import styles from "./Highlight.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import AdminPanelLink from "../AdminPanelLink/AdminPanelLink";
import { useEffect, useState } from "react";
import ProductLoading from "@/components/ProductLoading/ProductLoading";
import readCategory from "@/services/crud/readCategory";
import ErrorApiMessage from "@/components/ErrorApiMessage/ErrorApiMessage";

type Data = {
  id: string;
  data: { name: string; price: string };
};

export default function Highlight() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await readCategory("promocao"));
      } catch {
        <ErrorApiMessage />;
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
            data.map(({ id, data }: Data) => {
              return (
                <ProductCard
                  href={
                    "/" +
                    "produtos" +
                    "/" +
                    "promocao" +
                    "/" +
                    id +
                    "/" +
                    data.name
                      .replaceAll("/", "-")
                      .replaceAll(" ", "-")
                      .toLowerCase()
                  }
                  key={id}
                  id={id}
                  name={data.name}
                  price={data.price}
                />
              );
            })
          )}
        </ul>
      </div>
    </section>
  );
}
