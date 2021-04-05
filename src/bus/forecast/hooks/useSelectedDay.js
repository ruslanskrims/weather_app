import { useDispatch, useSelector } from 'react-redux'
import { forecastActions } from '../actions'
export const useSelectedDay = () => {
  const dispatch = useDispatch()
  const { selectedDay } = useSelector((state) => state.forecast)
  const setSelectedDay = (day) => dispatch(forecastActions.setSelectedDay(day))
  return {
    selectedDay,
    setSelectedDay,
  }
}
