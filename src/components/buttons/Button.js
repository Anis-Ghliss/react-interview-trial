import React from "react";
import "./button.scss";
export const Button = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className="button-container bounce">
        {children}
      </button>
    </div>
  );
};
