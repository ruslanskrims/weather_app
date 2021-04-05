import { combineReducers } from 'redux'

import { forecastReducer as forecast } from '../bus/forecast/reducer'

export const rootReducer = combineReducers({
  forecast,
})
