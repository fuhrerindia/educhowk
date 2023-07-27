import React from "react";
import Image from "next/image";
import constants from "@/constants";
import Row from "../row/row";
import SearchIcon from "@mui/icons-material/Search";
import style from "./style.module.css";
import SecondaryButton from "../button/secondary";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Row justifyContent="space-evenly" className={style.header}>
        <Link href="/">
          <Image
            src={constants.logo}
            alt={constants.alt}
            width={50}
            height={50}
          />
        </Link>
        <Row className={style.searchBox}>
          <SearchIcon />
          <input
            type="search"
            placeholder="Search Collage, University, Courses"
          />
        </Row>
        <Row justifyContent="space-evenly">
          <SecondaryButton className={style.button}>
            Universties
          </SecondaryButton>
          <SecondaryButton className={style.button}>Collages</SecondaryButton>
          <SecondaryButton className={style.button}>Courses</SecondaryButton>
        </Row>
      </Row>
    </header>
  );
}
