import React, { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    data: pedidos,
    loading,
    error,
  } = useFetchData("https://fakestoreapi.com/carts");
  const { data: produtos } = useFetchData("https://fakestoreapi.com/products");

  const [subTotal, setSubTotal] = useState(0);

  const handlePrecos = () => {
    return pedidos.reduce((acc, pedido) => {
      const valorTotalPedido = pedido.products.reduce((total, item) => {
        const produto = produtos.find((prd) => prd.id === item.productId);

        return total + produto.price * item.quantity;
      }, 0);
      return acc + valorTotalPedido;
    }, 0);
  };

  const qtdProdutosVendidos = () => {
    let total = 0;
    pedidos.map((pedido) => {
      pedido.products.map((item) => {
        total += item.quantity;
      });
    });

    return total;
  };

  const totalProdutos = qtdProdutosVendidos();

  const valorTotal = handlePrecos();
  console.log(valorTotal);

  return (
    <>
      <h1 className="my-5 mx-12 text-3xl font-bold">Pedidos</h1>
    <div className="w-full max-w-[90%] ml-12 my-5">

      <div className="w-full flex items-center justify-center gap-5 my-5">
        <div class="card-info">
          <div class="card-block">
            <i
              class="fa-solid fa-dollar-sign"
              style={{fontSize: "35px", opacity: "0.8"}}
            ></i>
          </div>

          <div class="card-text">
            <h1>Valor total em pedidos</h1>
            <p>R${valorTotal.toFixed(2)}</p>
            <Link to="/pedidos" className="link-carts">Ver pedidos</Link>
          </div>
        </div>
        <div class="card-info">
          <div class="card-block">
            <i
              class="fa-solid fa-shopping-cart"
              style={{fontSize: "35px", opacity: "0.8"}}
            ></i>
          </div>

          <div class="card-text">
            <h1>Qtd. total de produtos vendidos</h1>
            <p>{totalProdutos}</p>
            <Link to="/pedidos"  className="link-carts">Ver pedidos</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
