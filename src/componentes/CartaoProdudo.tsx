import type { Produto } from "../types/produto";

interface CartaoProdutoProps {
  produto: Produto;
  mostrarCategoria?: boolean;
}

export function CartaoProduto({
  produto,
  mostrarCategoria = true,
}: CartaoProdutoProps) {
  return (
    <article>
      <h2>{produto.nome}</h2>

      <p>Código de barras: {produto.codigo_barras}</p>

      <p>Preço de venda: R$ {produto.preco_venda.toFixed(2)}</p>

      {mostrarCategoria && (
        <p>ID da categoria: {produto.id_categoria}</p>
      )}

      <p>
        {produto.ativo ? "Produto ativo" : "Produto inativo"}
      </p>
    </article>
  );
}