import { CartaoProduto } from "./componentes/CartaoProdudo";
import type { Produto } from "./types/produto";
import { FormularioProduto } from "./componentes/FormularioProduto";

const produto1: Produto = {
  id: 1,
  nome: "Semente de milho",
  codigo_barras: "7891234567890",
  preco_venda: 25.9,
  id_categoria: 1,
  ativo: true,
};

const produto2: Produto = {
  id: 2,
  nome: "Adubo NPK",
  codigo_barras: "7899876543210",
  preco_venda: 89.9,
  id_categoria: 2,
  ativo: true,
};

export default function App() {
  return (
    <main>
      <h1>ESTOK</h1>

      <CartaoProduto produto={produto1} />

      <CartaoProduto produto={produto2} />
    </main>
  );
}