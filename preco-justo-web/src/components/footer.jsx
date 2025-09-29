import React from "react";
import theme from "../styles/theme";

const Footer = () => {
  return (
    <footer className="text-white text-center py-4 mt-5" style={{ backgroundColor: theme.primary.secondary }}>
      <p className="mb-1">&copy; 2025 UPX - AGRO 4.0 | Todos os direitos reservados</p>
      <div>
        <a href="#" className="text-white me-3">Email</a>
        <a href="#" className="text-white">WhatsApp</a>
      </div>
    </footer>
  );
};

export default Footer;