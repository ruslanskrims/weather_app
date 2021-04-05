// Types
import { types } from "./types";

import { api } from "../../api";
import { filterPastDates } from "../../helpers/filterPastDates";
import { sortByAscendingOrder } from "../../helpers/sortByAscendingOrder";

export const forecastActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.FORECAST_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.FORECAST_STOP_FETCHING,
    };
  },
  fill: (payload) => {
    return {
      type: types.FORECAST_FILL,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.FORECAST_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },

  setSelectedDay: (payload) => {
    return {
      type: types.FORECAST_SET_SELECTED_DAY,
      payload,
    };
  },
  setFilteredDays: (payload) => {
    return {
      type: types.FORECAST_FILTER_DAYS,
      payload,
    };
  },
  setWeek: (payload) => {
    return {
      type: types.FORECAST_WEEK,
      payload,
    };
  },

  // Async
  fetchAsync: () => async (dispatch) => {
    dispatch({
      type: types.FORECAST_FETCH_ASYNC,
    });

    dispatch(forecastActions.startFetching());
    try {
      const response = await api.forecast.fetch();
      if (response.status === 200) {
        const { data } = await response.json();
        const sortedDates = sortByAscendingOrder(data);
        const filteredDates = filterPastDates(sortedDates.slice(0, 7));
        dispatch(forecastActions.setSelectedDay(filteredDates[0]));
        dispatch(forecastActions.setWeek(filteredDates));
        dispatch(forecastActions.fill(filteredDates));
      }
    } catch (error) {
      dispatch(forecastActions.setFetchingError(error));
    }

    dispatch(forecastActions.stopFetching());
  },
});
