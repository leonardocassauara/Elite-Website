"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductsWrapper.module.css";
import PaginationControls from "../PaginationControls/PaginationControls";
import categoryProducts from "@/data/categoryProducts";
import { useEffect, useState } from "react";
import ProductLoading from "@/components/ProductLoading/ProductLoading";

type AppProps = {
  category: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

type Data = {
  id: string;
  name: string;
  price: string;
};

// TODO: substituir mock
export default function ProductsWrapper({ category, searchParams }: AppProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await categoryProducts());
      } catch {
        console.error("Falha: recuperar dados.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  // TODO: atualizar com as queries do db
  const start = (Number(page) - 1) * Number(per_page); // 0, 12, 24...
  const end = start + Number(per_page); // 12, 24, 36...

  return (
    <div className={styles["background-container"]}>
      <ul className={styles["products-container"]}>
        {loading
          ? Array.from({ length: 12 }, (_, index) => {
              return <ProductLoading key={index} />;
            })
          : data.slice(start, end).map(({ id, name, price }: Data) => {
              return (
                <ProductCard
                  href={
                    "./" +
                    category +
                    "/" +
                    id +
                    "/" +
                    name.replaceAll("/", "-").replaceAll(" ", "-").toLowerCase()
                  }
                  id={id}
                  key={id}
                  name={name}
                  price={price}
                />
              );
            })}
      </ul>
      {!loading && (
        <PaginationControls
          category={category}
          hasPreviousPage={start > 0}
          hasNextPage={end < data.length}
        />
      )}
    </div>
  );
}
