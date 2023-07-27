import constants from "@/constants";
import React from "react";
import classes from "./style.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <h2>{constants.appName}</h2>
      <p>
        We don’t charge or ask and sell student’s personal details, neither we
        throw thousands of popups on visitor’s face, therefore we need to show
        ads in order to meet the site expenses. We are really sorry for that.
      </p>
    </footer>
  );
}
