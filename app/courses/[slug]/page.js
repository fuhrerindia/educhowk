import Row from "@/widgets/row/row";
import React from "react";
import Image from "next/image";
import org from "@/public/org.png";
import classes from "./style.module.css";
import Rating from "@/widgets/rating/rate";

export default function Page({ params }) {
  return (
    <main>
      <Row>
        <Image
          src={org}
          width={200}
          height={200}
          className={classes.logo}
          alt="Some name and it's logo"
        />
        <div>
          <h1>{"XYZ Universties"}</h1>
          <h3>{"Delhi University"}</h3>
          <Rating value={1.5} />
        </div>
      </Row>
    </main>
  );
}
