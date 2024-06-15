import Products from "@/containers/ProductsPage/pages/Products/Products";

export default function Produtos({
  params,
  searchParams,
}: {
  params: { categoria: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (params.categoria === "pe%C3%A7as") params.categoria = "pe\u00e7as";
  else if (params.categoria == "servi%C3%A7os")
    params.categoria = "servi\u00e7os";
  return <Products category={params.categoria} searchParams={searchParams} />;
}
