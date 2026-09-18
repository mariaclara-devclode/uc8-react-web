import type { Produto } from "../types/produto";

interface CartaoProdutoProps {
  produto: Produto;
  minimoPreco?: number;
}

export default function CartaoProduto({
  produto,
  minimoPreco = 30,
}: CartaoProdutoProps) {
  return (
    <article>
      <h2>{produto.nome}</h2>

      <p>Código de barras: {produto.codigo_barras}</p>

      <p>Preço de venda: R$ {produto.preco_venda.toFixed(2)}</p>

      <p>ID da categoria: {produto.id_categoria}</p>

      <p>{produto.ativo ? "Produto ativo" : "Produto inativo"}</p>

      {produto.preco_venda < minimoPreco && (
        <p>Produto com preço abaixo do mínimo</p>
      )}
    </article>
  );
}
