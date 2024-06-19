import Banner from "./fragments/Banner/Banner";
import ProductsWrapper from "./fragments/ProductsWrapper/ProductsWrapper";

type AppProps = {
  category: string;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Products({ category, searchParams }: AppProps) {
  return (
    <>
      <Banner text={category.toUpperCase()} />
      <ProductsWrapper category={category} searchParams={searchParams} />
    </>
  );
}
