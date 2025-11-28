import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Rotas
import App from "./App.jsx";
import Produtos from "./Routes/Produtos.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pedidos from "./Routes/Pedidos.jsx";
import Clientes from "./Routes/Clientes.jsx";
import ClientesDetails from "./Routes/ClientesDetails.jsx";
import ProdutoDetails from "./Routes/ProdutoDetails.jsx";
import Home from "./Routes/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
      {
        path: "/clientes",
        element: <Clientes />,
      },
      {
        path: "/clientes/:id",
        element: <ClientesDetails />,
      },
      {
        path: "/produtos/:idProduto",
        element: <ProdutoDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
