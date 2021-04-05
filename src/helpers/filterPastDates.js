import * as dayjs from 'dayjs'

export const filterPastDates = (date) => {
  const currentDay = dayjs(new Date()).date()

  return date.filter((item) => dayjs(item.day).date() >= currentDay)
}
