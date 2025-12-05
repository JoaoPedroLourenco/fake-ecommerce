import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

const Produtos = () => {
  const {
    data: produtos,
    loading,
    error,
  } = useFetchData("https://fakestoreapi.com/products");

  const [cart, setCart] = useState([]);

  const addToCart = (produtoId) => {
    const newItem = {title: produtoId.title, price: produtoId.price}

    setCart((prevCart) => [...prevCart, newItem]);
  };


  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(!isOpen);
  };


  console.log(cart);

  return (
    <div className="w-full h-full flex items-center justify-center flex-wrap gap-4 my-5">
      <button onClick={openCart} className="relative">

      <i className="fa-solid fa-shopping-cart" style={{fontSize: "28px"}}></i>
      <span className="w-[25px] h-[25px] absolute -top-[50%] -right-[30%] flex items-center justify-center rounded-full bg-orange-500">{cart.length}</span>
      </button>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        produtos?.map((produto) => (
          <div className="w-[300px] h-[500px] flex flex-col  gap-2.5 bg-[#383838] p-4 rounded-lg shadow-lg hover:scale-103 duration-200">
            <div className="w-full h-[250px] flex items-center justify-center">
              <img src={produto.image} className="max-w-[120px]" />
            </div>
            <p>{produto.category}</p>
            <p>{produto.title}</p>
            <p>${produto.price.toFixed(2)}</p>
            <button onClick={() => addToCart(produto)}>
              Adicionar ao carrinho
            </button>
            <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
          </div>
        ))
      )}

      {isOpen && (
        <div className="fixed top-0 w-[200px] h-full bg-gray-800 right-[0%]">
          {cart.length > 0 ? (cart.map((item) => (
              <div>
                <p>{item.title}</p>
                <p>R${(item.price).toFixed(2)}</p>
              </div>
            ))) : ""}
            
        </div>
      )}
    </div>
  );
};

export default Produtos;
