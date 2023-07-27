import React from "react";
import design from "./style.module.css";

export default function Row({ children, justifyContent, className, style }) {
  const css = style || {};
  return (
    <div
      className={`${design.row}${className ? ` ${className}` : ""}`}
      style={{ justifyContent, ...css }}
    >
      {children}
    </div>
  );
}
