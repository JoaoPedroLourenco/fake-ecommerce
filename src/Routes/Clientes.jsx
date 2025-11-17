import React, { useEffect, useState } from "react";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const handleClientes = async () => {
      const apiClientes = await fetch("https://fakestoreapi.com/users");
      const data = await apiClientes.json();
      setClientes(data);
    };
    handleClientes();
  }, []);

  return (
    <div className="w-[90%] h-full flex items-center justify-center flex-col gap-4">
      <h1>Clientes</h1>
      {clientes &&
        clientes.map((cliente) => (
          <div className="w-[80%] h-[60px] flex items-center justify-center bg-[#383838] px-4 rounded-xl">
            <div className="flex-1">
              <p>{cliente.email}</p>
            </div>

            <div className="flex-1">
              <p>{cliente.username}</p>
            </div>

            <div className="flex flex-1">
              <p>
                {cliente.name.firstname} {cliente.name.lastname}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Clientes;
