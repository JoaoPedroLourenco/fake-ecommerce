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

  const addToCart = (produto) => {
    const newItem = {
      id: produto.id,
      title: produto.title,
      price: produto.price,
      quantidade: 1,
    };

    setCart((prevCart) => {
      const produtoIndex = prevCart.findIndex((prd) => prd.id === produto.id);

      if (produtoIndex !== -1) {
        const listaAtualizada = [...prevCart];
        listaAtualizada[produtoIndex] = {
          ...listaAtualizada[produtoIndex],
          quantidade: listaAtualizada[produtoIndex].quantidade + 1,
        };
        return listaAtualizada;
      } else {
        return [...prevCart, newItem];
      }
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleCart = () => {
    setIsOpen(!isOpen);
  };

  const valorTotalCarrinho = () => {
    if (cart.length > 0) {
      return cart.reduce((acc, prd) => {
        return acc + prd.price * prd.quantidade;
      }, 0);
    } else {
      return;
    }
  };

  const valorTotal = valorTotalCarrinho();
  console.log(valorTotal);

  const [searchValue, setSearchValue] = useState("");
  const [listaFiltrada, setListaFiltrada] = useState([]);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue) {
        let filtrarLista = produtos?.filter((prd) =>
          prd.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        setListaFiltrada(filtrarLista);
      } else {
        setListaFiltrada([]);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [searchValue]);
  return (
    <>
      <div className="flex justify-between items-center mt-8 mb-5 mx-16">
        <h1 className="text-3xl">Produtos</h1>

        <button onClick={handleCart} className="relative">
          <i
            className="fa-solid fa-shopping-cart"
            style={{ fontSize: "28px" }}
          ></i>
          <span className="w-[25px] h-[25px] absolute -top-[50%] -right-[30%] flex items-center justify-center rounded-full bg-orange-500">
            {cart.length}
          </span>
        </button>
      </div>

      <div className="flex justify-between items-center mt-8 mb-5 mx-16">
        <form className="w-full relative">
          <input
            type="text"
            placeholder={"Procure o nome do produto..."}
            className="w-full h-[50px] bg-[#383838] px-4 rounded-lg relative focus:outline-none focus:shadow-md shadow-gray-600/40 duration-200"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <span className="absolute right-4 top-[50%] translate-y-[-50%] ">
            <i className="fa-solid fa-search" style={{ fontSize: "20px" }}></i>
          </span>
        </form>
      </div>

      <div className="w-full h-auto flex flex-wrap gap-4 ml-16">
        {loading ? (
          <p>Carregando...</p>
        ) : listaFiltrada.length > 0 ? (
          listaFiltrada.map((produto) => (
            <div className="w-[300px] h-[500px] flex flex-col gap-2.5 bg-[#383838] p-4 rounded-lg shadow-lg hover:scale-103 duration-200">
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
        ) : (
          produtos?.map((produto) => (
            <div className="w-[300px] h-[500px] flex flex-col gap-2.5 bg-[#383838] p-4 rounded-lg shadow-lg hover:scale-103 duration-200">
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
          <div className="fixed top-0 right-0 w-[300px] h-full overflow-hidden bg-[#383838] rounded-tl-xl pl-2 pb-10">
            <div className="h-full max-h-[98%] overflow-auto">
              <div className="p-2 flex flex-col justify-center gap-2">
                <h1 className="text-2xl">
                  {cart.length} Produtos selecionados
                </h1>
                <hr className="w-full" />
              </div>

              <div className="w-full h-auto flex flex-col gap-2">
                {cart.length > 0
                  ? cart.map((item) => (
                      <div className="w-full h-auto py-1 px-1 bg-white/10 rounded-lg">
                        <p>{item.title}</p>
                        <p>R${(item.price * item.quantidade).toFixed(2)}</p>
                        <p>x{item.quantidade}</p>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="relative bottom-5">
              Valor total: R$ {valorTotal.toFixed(2)}
            </div>
            <div className="w-full h-auto py-2 pr-2 relative bottom-4 z-20">
              <button
                onClick={handleCart}
                className="w-full h-[30px] bg-gray-500/30 rounded-lg"
              >
                Continuar comprando
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Produtos;
