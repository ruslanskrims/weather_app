import React from "react";
import styles from "./styles.module.scss";
import { Forecast } from "../../bus/forecast";

export const Main = () => {
  return (
    <>
      <main>
        <Forecast />
      </main>
    </>
  );
};
