"use client";

import Image from "next/image";
import styles from "./ProductInfo.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";
import toTitle from "@/utils/toTitle";
import { useState, useEffect } from "react";
import readProduct from "@/services/crud/readProduct";
import ProductPageLoading from "../ProductPageLoading/ProductPageLoading";
import ErrorApiMessage from "@/components/ErrorApiMessage/ErrorApiMessage";

type AppProps = {
  id: string;
  category: string;
};

export default function ProductInfo({ category, id }: AppProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const categoryDb = category.replaceAll("%C3%A7", "c");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await readProduct(categoryDb, id));
      } catch {
        <ErrorApiMessage />;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles["background-container"]}>
      <div className={styles["content-container"]}>
        {loading ? (
          <ProductPageLoading />
        ) : (
          <>
            <Image
              src="/img/product.png"
              alt=""
              width={460}
              height={662}
              className={styles["image"]}
            />
            <div className={styles["content-info-container"]}>
              <h1 className={styles["title"]}>
                {data.data.name.toUpperCase()}
              </h1>
              <p className={styles["price"]}>
                {"R$ " + data.data.price.replace(".", ",")}
              </p>
              <LinkButton
                visual="solid"
                href="https://api.whatsapp.com/send/?phone=5521968804228&text&type=phone_number&app_absent=0"
              >
                FALE COM UM ATENDENTE
              </LinkButton>
            </div>
            <div className={styles["technical-section"]}>
              <h2 className={styles["sub-title"]}>MAIS INFORMAÇÕES</h2>
              <div className={styles["card-container"]}>
                {Object.entries(data.data.technical).map(
                  ([key, value], index) => {
                    return (
                      <div
                        key={index}
                        className={styles["card-item-container"]}
                      >
                        <p className={styles["card-key"]}>{toTitle(key)}</p>
                        <p className={styles["card-value"]}>{String(value)}</p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
