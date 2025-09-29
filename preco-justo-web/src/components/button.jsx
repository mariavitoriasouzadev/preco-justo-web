import React from "react";
import theme from "../styles/theme";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`btn ${className} color-green`}
      onClick={onClick}
      style={{
        backgroundColor: theme.primary.main,
        color: theme.neutral.white,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
