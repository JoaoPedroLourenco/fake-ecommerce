import React, { useEffect, useState } from "react";

const Produtos = () => {
  const [loading, setLoading] = useState(false);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const getProdutos = async () => {
      setLoading(true);

      const api = await fetch("https://fakestoreapi.com/products");
      const data = await api.json();
      setProdutos(data);

      setLoading(false);
    };

    getProdutos();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center flex-wrap gap-4 my-5">
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
          </div>
        ))
      )}
    </div>
  );
};

export default Produtos;
