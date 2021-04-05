import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { forecastActions } from "../actions";

export const useFilter = () => {
  const dispatch = useDispatch();
  const { filteredDays } = useSelector((state) => state.forecast);

  const [selected, setSelect] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [filtered, setFilter] = useState(false);
  const setFilterDispatch = (values) =>
    dispatch(forecastActions.setFilteredDays(values));

  return {
    setFilterDispatch,
    selected,
    setSelect,
    min,
    setMin,
    max,
    setMax,
    filtered,
    setFilter,
    filteredDays,
  };
};
