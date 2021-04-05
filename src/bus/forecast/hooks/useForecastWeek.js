import { useSelector, useDispatch } from "react-redux";
import { forecastActions } from "../actions";

export const useForecastWeek = () => {
  const { week, data } = useSelector((state) => state.forecast);
  const dispatch = useDispatch();

  const setWeek = (data) => dispatch(forecastActions.setWeek(data));

  return {
    weekData: week,
    setWeek,
    data,
  };
};
