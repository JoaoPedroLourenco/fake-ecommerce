import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const ClientesDetails = () => {
  const [clientes, setClientes] = useState([]);
  
    useEffect(() => {
      const handleClientes = async () => {
        const apiClientes = await fetch("https://fakestoreapi.com/users");
        const data = await apiClientes.json();
        setClientes(data);
      };
      handleClientes();
    }, []);

    const {id} = useParams()
    console.log(id)


  return (
    <div>
      {clientes && clientes.map((user) => (
        user.id === Number(id) ? <p>{user.name.firstname}</p> : ""
        
      ))}
    </div>
  )
}

export default ClientesDetails