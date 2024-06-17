import Product from "@/containers/ProductsPage/pages/Product/Product";

export default function Produto({
  params,
}: {
  params: { id: string; nome: string };
}) {
  return <Product id={params.id} />;
}
