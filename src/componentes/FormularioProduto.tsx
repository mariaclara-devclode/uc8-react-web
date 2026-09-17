import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Produto } from "../types/produto";

export function FormularioProduto() {
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    codigo_barras: "",
    preco_venda: 0,
    id_categoria: 0,
    ativo: true,
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const { name, value, type, checked } = event.target;

    setProduto((produtoAtual) => ({
      ...produtoAtual,
      [name]:
        type === "checkbox"
          ? checked
          : name === "preco_venda" || name === "id_categoria"
            ? Number(value)
            : value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Produto cadastrado:", produto);
  }

  return (
    <section>
      <h2>Cadastro de Produto</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={produto.nome}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="codigo_barras">Código de barras:</label>
          <input
            id="codigo_barras"
            name="codigo_barras"
            type="text"
            value={produto.codigo_barras}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="preco_venda">Preço de venda:</label>
          <input
            id="preco_venda"
            name="preco_venda"
            type="number"
            step="0.01"
            value={produto.preco_venda}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="id_categoria">ID da categoria:</label>
          <input
            id="id_categoria"
            name="id_categoria"
            type="number"
            value={produto.id_categoria}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="ativo">Produto ativo:</label>
          <input
            id="ativo"
            name="ativo"
            type="checkbox"
            checked={produto.ativo}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar Produto</button>
      </form>
    </section>
  );
}