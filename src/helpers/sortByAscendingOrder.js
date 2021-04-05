import * as dayjs from 'dayjs'

export const sortByAscendingOrder = (data) => {
  return [...data].sort((a, b) => {
    const dayA = dayjs(a.day).date()
    const dayB = dayjs(b.day).date()
    return dayA > dayB ? 1 : dayA < dayB ? -1 : 0
  })
}
