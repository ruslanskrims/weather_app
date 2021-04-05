// Types
import { types } from './types'
import { getFilteredForecast } from '../../helpers/getFilteredForecast'

const initialState = {
  isFetching: false,
  error: false,
  selectedDay: null,
  data: [],
  isFiltered: false,
  week: [],
}

export const forecastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FORECAST_START_FETCHING:
      return { ...state, isFetching: true }
    case types.FORECAST_STOP_FETCHING:
      return { ...state, isFetching: false }
    case types.FORECAST_SET_FETCHING_ERROR:
      return { ...state, error: payload }
    case types.FORECAST_FILL:
      return { ...state, week: payload, data: payload, isFiltered: false }
    case types.FORECAST_SET_SELECTED_DAY:
      return { ...state, selectedDay: payload }
    case types.FORECAST_FILTER_DAYS:
      return {
        ...state,
        week: getFilteredForecast(state.week, payload),
        isFiltered: true,
      }
    case types.FORECAST_WEEK:
      return { ...state, week: payload }

    default:
      return state
  }
}
