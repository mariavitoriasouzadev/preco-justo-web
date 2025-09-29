import React from "react";
import theme from "../styles/theme";

const CardInfo = ({ title, text, icon }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="card border-0 shadow-sm p-4 card-fixed">
        {icon && <div className="mb-3">{icon}</div>}
        <h5 className="fw-bold" style={{ color: theme.primary.secondary }}>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardInfo;
