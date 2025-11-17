import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-[10%] h-dvh fixed left-0 top-0 border-r border-gray-100/30 flex items-center p-5 text-white">
      <nav className="w-full">
        <ul className="flex flex-col text-left">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "w-full h-10 bg-[#383838] px-2 flex items-center rounded-xl duration-200 font-bold"
                : "w-full h-10 hover:bg-[#383838] px-2 flex items-center rounded-xl duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive
                ? "w-full h-10 bg-[#383838] px-2 flex items-center rounded-xl duration-200 font-bold"
                : "w-full h-10 hover:bg-[#383838] px-2 flex items-center rounded-xl duration-200"
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/pedidos"
            className={({ isActive }) =>
              isActive
                ? "w-full h-10 bg-[#383838] px-2 flex items-center rounded-xl duration-200 font-bold"
                : "w-full h-10 hover:bg-[#383838] px-2 flex items-center rounded-xl duration-200"
            }
          >
            Pedidos
          </NavLink>
          <NavLink
            to="/clientes"
            className={({ isActive }) =>
              isActive
                ? "w-full h-10 bg-[#383838] px-2 flex items-center rounded-xl duration-200 font-bold"
                : "w-full h-10 hover:bg-[#383838] px-2 flex items-center rounded-xl duration-200"
            }
          >
            Clientes
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
