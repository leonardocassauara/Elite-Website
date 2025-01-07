import Product from "@/containers/ProductsPage/pages/Product/Product";

export default function Produto({
  params,
}: {
  params: { id: string; nome: string; categoria: string };
}) {
  return <Product id={params.id} category={params.categoria} />;
}
