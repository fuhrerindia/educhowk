import React from "react";
import css from "./second.module.css";
import Link from "next/link";

export default function SecondaryButton({
  children,
  className,
  href,
  onClick,
  target,
}) {
  return href ? (
    <Link href={href} target={target}>
      <button className={`${css.second}${className ? ` ${className}` : ""}`}>
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`${css.second}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
