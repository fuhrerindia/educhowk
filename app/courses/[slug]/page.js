import React from "react";

export default function Page({ params }) {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
}
