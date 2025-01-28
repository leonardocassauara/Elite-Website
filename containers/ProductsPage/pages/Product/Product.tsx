import ProductInfo from "./fragments/ProductInfo/ProductInfo";

type AppProps = {
  id: string;
  category: string;
};

export default function Product({ id, category }: AppProps) {
  return (
    <article aria-label="Produto">
      <ProductInfo id={id} category={category} />
    </article>
  );
}
