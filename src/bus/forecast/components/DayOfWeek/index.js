import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles.module.scss'
import * as dayjs from 'dayjs'
import cx from 'classnames'
import { useSelectedDay } from '../../hooks'
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter'

export const DayOfWeek = ({ source }) => {
  const { setSelectedDay } = useSelectedDay()
  const { selectedDay } = useSelector((state) => state.forecast)
  const { day, temperature, type } = source

  const iconCn = cx(styles.icon, {
    [styles.icon_rainy]: type === 'rainy',
    [styles.icon_sunny]: type === 'sunny',
    [styles.icon_cloudy]: type === 'cloudy',
  })
  const dayCn = cx(styles.day, {
    [styles.day_selected]: selectedDay.day === day,
  })

  const currentDay = dayjs(day).format('dddd')

  return (
    <>
      <div className={dayCn} onClick={() => setSelectedDay(source)}>
        <p>{capitalizeFirstLetter(currentDay)}</p>
        <div className={iconCn}></div>
        <span>{temperature}</span>
      </div>
    </>
  )
}
