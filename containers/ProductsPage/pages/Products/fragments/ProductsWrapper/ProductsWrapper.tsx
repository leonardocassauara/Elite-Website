import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductsWrapper.module.css";
import PaginationControls from "../PaginationControls/PaginationControls";
import { categoryProducts } from "@/data/categoryProducts";

type AppProps = {
  category: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

// TODO: substituir mock
export default function ProductsWrapper({ category, searchParams }: AppProps) {
  const products = categoryProducts;
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  // TODO: atualizar com as queries do db
  const start = (Number(page) - 1) * Number(per_page); // 0, 12, 24...
  const end = start + Number(per_page); // 12, 24, 36...
  const entries = products.slice(start, end);

  return (
    <div className={styles["background-container"]}>
      <div className={styles["products-container"]}>
        {entries.map(({ id, name, price }) => {
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
      </div>
      <PaginationControls
        category={category}
        hasPreviousPage={start > 0}
        hasNextPage={end < products.length}
      />
    </div>
  );
}
