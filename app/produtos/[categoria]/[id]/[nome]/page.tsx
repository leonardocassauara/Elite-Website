export default function Produto({
  params,
}: {
  params: { id: string; nome: string };
}) {
  return <div>{params.id + params.nome}</div>;
}
