import React from "react";
import classes from "./tabview.module.css";
import Row from "../row/row";
import Link from "next/link";

export default function TabView({ buttons, slug, data, main }) {
  return (
    <section className={classes.view}>
      <Row>
        {buttons.map((item) => {
          return (
            <Link href={`/${main}/${slug}/${item.href}`}>
              <div>{item.label}</div>
            </Link>
          );
        })}
      </Row>
      <article>
        {buttons.map((item) => {
          if (item.href === data) {
            return item.content;
          }
        })}
      </article>
    </section>
  );
}
