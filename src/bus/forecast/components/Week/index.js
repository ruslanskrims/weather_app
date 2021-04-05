import React from "react";
import styles from "./styles.module.scss";
import { DayOfWeek } from "../DayOfWeek";
import { useForecastFetch, useForecastWeek } from "../../hooks";

export const Week = () => {
  const { isFetching } = useForecastFetch();
  const { weekData } = useForecastWeek();

  const week = weekData ? (
    weekData.map((data, index) => <DayOfWeek key={index} source={data} />)
  ) : (
    <p>THERE IS NO MATCH FOR THESE DAYS</p>
  );
  const weekJSX =
    isFetching || week.length ? (
      <div className={styles.forecast}>{week}</div>
    ) : (
      <h1 className={styles.err_response}>По заданным критериям ничего нет</h1>
    );

  return <>{weekJSX}</>;
};
