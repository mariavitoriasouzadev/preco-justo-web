import React from "react";
import { Link } from "react-router-dom";
import theme from "../styles/theme";

const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <img
        src="/plantar.svg"
        alt="Planta preço justo"
        className="img-fluid"
        style={{ width: "50px", height: "auto" }}
      />

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link navbar-link-grey">Menu</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/categorias" className="nav-link navbar-link-grey">Categorias</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/fornecedores" className="nav-link navbar-link-grey">Fornecedores</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/sobre" className="nav-link navbar-link-grey">Sobre Nós</Link>
          </li>
        </ul>
      </div>

      <button
        className="btn ms-4"
        style={{
          backgroundColor: theme.primary.main,
          color: theme.neutral.white,
          fontWeight: 500,
          fontSize: "1rem",
          padding: "8px 24px"
        }}
      >
        Pesquisar aqui
        <img src="/seta-direita.svg" alt="Pesquisar" width={20} height={20} className="ms-2 mb-1"/>
      </button>
    </nav>
  );
};

export default Navbar;
