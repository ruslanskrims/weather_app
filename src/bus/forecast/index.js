import React from "react";
import { useSelector } from "react-redux";
import { ForecastFilter, SelectedDay, Week } from "./components";

export const Forecast = () => {
  const { selectedDay, isFetching, week } = useSelector(
    (state) => state.forecast
  );

  const selectedDayJSX = selectedDay && <SelectedDay source={selectedDay} />;
  const resultJSX =
    isFetching && !week.length ? (
      <>
        <h1>Loading</h1>
      </>
    ) : (
      <>
        <ForecastFilter />
        {selectedDayJSX}
        <Week />
      </>
    );
  return <>{resultJSX}</>;
};
