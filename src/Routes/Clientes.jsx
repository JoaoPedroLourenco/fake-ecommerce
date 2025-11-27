import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

const Clientes = () => {
  const {data: clientes, loading, error} = useFetchData("https://fakestoreapi.com/users")

  const [clienteDetails, setClienteDetails] = useState(0);

  const detailsCliente = (clienteId) => {
    setClienteDetails(clienteId.id)
    console.log(clienteId.name.firstname)
  }

  return (
    <>
      <h1 className="my-5 mx-12 text-3xl font-bold">Clientes</h1>
    <div className="w-[90%] h-full flex items-center justify-center flex-col gap-4">
      {clientes &&
        clientes.map((cliente) => (
          <div className="w-[80%] h-[60px] flex items-center justify-center bg-[#383838] px-4 rounded-xl">
            <div className="flex flex-1">
              <p>
                {cliente.name.firstname} {cliente.name.lastname}
              </p>
            </div>

            <div className="flex-1">
              <p>{cliente.username}</p>
            </div>

            <div className="flex-1">
              <p>{cliente.email}</p>
            </div>

            <div className="flex-1">
              <p>{cliente.phone}</p>
            </div>

            <div className="flex-1">
              <p>{cliente.address.city}</p>
            </div>

            <button onClick={() => detailsCliente(cliente)}>
              Ver detalhes
            </button>

            <Link to={`/clientes/${cliente.id}`}>Aaaaa</Link>
          </div>
        ))}
    </div>
    </>
  );
};

export default Clientes;
