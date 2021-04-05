import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { forecastActions } from "../actions";

export const useForecastFetch = () => {
  const dispatch = useDispatch();
  const { week, isFetching, error } = useSelector((state) => state.forecast);

  useEffect(() => {
    dispatch(forecastActions.fetchAsync());
  }, []);

  return {
    week,
    isFetching,
    error,
  };
};
