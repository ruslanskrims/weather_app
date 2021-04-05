import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter'
import * as dayjs from 'dayjs'

export const SelectedDay = ({ source }) => {
  const { type, temperature, rain_probability, humidity, day } = source
  const cn = cx(styles.icon, {
    [styles.icon_cloudy]: type === 'cloudy',
    [styles.icon_sunny]: type === 'sunny',
    [styles.icon_rainy]: type === 'rainy',
  })

  const currentDay = dayjs(day).format('dddd')

  return (
    <>
      <div className={styles.head}>
        <span className={cn}></span>
        <div className={styles.current__date}>
          <p>{capitalizeFirstLetter(currentDay)}</p>
          <span>{dayjs(day).format('DD MMMM')}</span>
        </div>
      </div>
      <div className={styles.current__weather}>
        <p className={styles.temperature}>{temperature}</p>
        <p className={styles.meta}>
          <span className={styles.rainy}>{`${rain_probability}%`}</span>
          <span className={styles.humidity}>{`${humidity}%`}</span>
        </p>
      </div>
    </>
  )
}
