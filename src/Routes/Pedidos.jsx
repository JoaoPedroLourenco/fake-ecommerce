import React, { useEffect, useState } from "react";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const apiPedidos = await fetch("https://fakestoreapi.com/carts");
      const dataPedidos = await apiPedidos.json();
      setPedidos(dataPedidos);

      const apiUsers = await fetch("https://fakestoreapi.com/users");
      const dataUsers = await apiUsers.json();
      setUsuario(dataUsers);

      const apiProdutos = await fetch("https://fakestoreapi.com/products");
      const dataProdutos = await apiProdutos.json();
      setProdutos(dataProdutos);
    };

    getInfo();
  }, []);

  const findUsuario = (uid) => {
    const clienteComPedido = usuario.find((user) => user.id === uid);
    return clienteComPedido
      ? `${clienteComPedido.name.firstname} ${clienteComPedido.name.lastname}`
      : "";
  };

  const findProduto = (produtoId) => {
    const itemPedido = produtos.find((item) => item.id === produtoId);
    return itemPedido ? `${itemPedido.title}` : "";
  };

  const valorProduto = (produtoId) => {
    const valorPedido = produtos.find((item) => item.id === produtoId);
    return valorPedido ? valorPedido.price : "";
  };

  const formatDate = (dataPedido) => {
    const dataFormatada = new Date(dataPedido);
    return dataFormatada.toLocaleDateString("pt-BR");
  };

  const [produtosDetails, setProdutoDetails] = useState(null);

  const opendetails = (pedidoId) => {
    setProdutoDetails(pedidoId);
  };

  const closeDetails = () => {
    setProdutoDetails(null);
  };

  const valorTotalPedido = (pedido) => {
    if (pedido) {
      return pedido.products.reduce((total, item) => {
        const produto = produtos.find((prd) => prd.id === item.productId);

        if (!produto) {
          return total;
        }

        return total + produto.price * item.quantity;
      }, 0);
    }
  };

  return (
    <div>
      <h1 className="my-5 mx-12 text-3xl font-bold">Pedidos</h1>

      <div className="w-full flex items-center justify-center flex-col gap-3">
        {pedidos &&
          pedidos.map((pedido) => (
            <>
              <div
                className={`w-[90%] min-h-[60px]  mx-5 px-4 flex justify-between items-center  bg-[#383838] ${
                  produtosDetails === null ? "rounded-xl" : "rounded-t-xl"
                }`}
              >
                <p>{pedido.id}</p>

                <p>Cliente: {findUsuario(pedido.userId)}</p>

                <div>
                  <p>Quantidade de produtos: {pedido.products.length}</p>
                  {
                  produtosDetails?.id !== pedido.id ? (
                    <button onClick={() => opendetails(pedido)}>
                      Ver produtos
                    </button>
                  ) : (
                    <button onClick={closeDetails}>Esconder Produtos</button>
                  )}
                </div>
                <p>
                  Valor total do pedido: R${valorTotalPedido(pedido).toFixed(2)}
                </p>

                <p>Data: {formatDate(pedido.date)}</p>
              </div>
              {produtosDetails?.id === pedido.id && (
                <div className="w-[90%] flex flex-col relative bg-[#383838] px-4 py-2 -mt-3.5 rounded-b-xl">
                  <p className="text-xl">Produtos: </p>
                  {pedido.products.map((item) => (
                    <div className="w-full flex gap-2">
                      <p>{findProduto(item.productId)}</p>
                      <p>Qtd: {item.quantity}</p>
                      <p>
                        Valor total:{" "}
                        {valorProduto(item.productId) * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Pedidos;
