import React from "react";
import Image from "next/image";
import H2 from "../heading/h2";
import Link from "next/link";
import classes from "./style.module.css";
import constants from "@/constants";

export default function Course({ image, name, duration, href }) {
  return (
    <Link href={href} className={classes.link}>
      <div className={classes.card}>
        <Image
          src={image}
          width={309}
          height={102}
          alt={`${name} Banner Image which has course duration of ${duration} - ${constants.appName}`}
        />
        <div className={classes.course}>
          <H2>{name}</H2>
          <span>{duration}</span>
        </div>
      </div>
    </Link>
  );
}
