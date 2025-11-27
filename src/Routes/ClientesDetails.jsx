import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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

  const { id } = useParams()
  console.log(id)


  return (
    <div>
      {clientes && clientes.map((user) => (
        user.id === Number(id) ? (
          <div className=''>
            <div className=''>
              <div>
                <p>First name:</p>
                <p className='w-[200px] h-[40px] bg-[#383838] flex items-center px-2 rounded-xl'>{user.name.firstname}</p>
              </div>
              <div>
                <p>Last name:</p>
                <span>{user.name.lastname}</span>

              </div>

              <p>
                {user.email}
              </p>

              <p>
                {user.username}
              </p>

              <p>{user.address.city}</p>

              <p>{user.address.street}</p>

              <p>{user.address.number}</p>
              <p>{user.address.zipcode}</p>

            </div>
          </div>
        )
          : ""

      ))}
    </div>
  )
}

export default ClientesDetails