import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <NavBar />
      <main className="w-full pl-[10%]  overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
