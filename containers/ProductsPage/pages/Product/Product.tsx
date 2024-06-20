import ProductInfo from "./fragments/ProductInfo/ProductInfo";

type AppProps = {
  id: string;
};

export default function Product({ id }: AppProps) {
  return (
    <>
      <ProductInfo id={id} />
    </>
  );
}
