import React from "react";

export default function Br({ size, vertical }) {
  return <div style={vertical ? { width: size } : { height: size }} />;
}
