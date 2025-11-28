import React from "react";
import { useFetchData } from "../hooks/useFetchData";

const Home = () => {
  const {
    data: pedidos,
    loading,
    error,
  } = useFetchData("https://fakestoreapi.com/carts");
  const { data: produtos } = useFetchData("https://fakestoreapi.com/products");

  const findProduto = (idProdutoPedido) => {
    const produto = produtos.find((prd) => prd.id == idProdutoPedido);
    return produto ? `${produto.price}` : "";
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {pedidos.map((pedido) =>
        pedido.products.map((item) => (
          <p>{findProduto(item.productId) * item.quantity}</p>
        ))
      )}
    </div>
  );
};

export default Home;
