"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductsWrapper.module.css";
import PaginationControls from "../PaginationControls/PaginationControls";
import { useEffect, useState } from "react";
import ProductLoading from "@/components/ProductLoading/ProductLoading";
import readCategory from "@/services/crud/readCategory";

type AppProps = {
  category: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

type Data = {
  id: string;
  data: any;
};

export default function ProductsWrapper({ category, searchParams }: AppProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const categoryDb = category.replaceAll("ç", "c");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(await readCategory(categoryDb));
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

  const start = (Number(page) - 1) * Number(per_page); // 0, 12, 24...
  const end = start + Number(per_page); // 12, 24, 36...

  return (
    <div className={styles["background-container"]}>
      <ul className={styles["products-container"]}>
        {loading
          ? Array.from({ length: 12 }, (_, index) => {
              return <ProductLoading key={index} />;
            })
          : data.slice(start, end).map(({ id, data }: Data) => {
              return (
                <ProductCard
                  href={
                    "./" +
                    category +
                    "/" +
                    id +
                    "/" +
                    data.name
                      .replaceAll("/", "-")
                      .replaceAll(" ", "-")
                      .toLowerCase()
                  }
                  id={id}
                  key={id}
                  name={data.name}
                  price={data.price}
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
