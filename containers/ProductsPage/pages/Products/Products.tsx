import Banner from "./fragments/Banner/Banner";
import ProductsWrapper from "./fragments/ProductsWrapper/ProductsWrapper";

type AppProps = {
  category: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Products({ category, searchParams }: AppProps) {
  return (
    <article aria-label={"Catálogo de " + category}>
      <Banner text={category.toUpperCase().replaceAll("-", " ")} />
      <ProductsWrapper category={category} searchParams={searchParams} />
    </article>
  );
}
