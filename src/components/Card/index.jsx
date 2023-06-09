import React from 'react'
import WeatherIcon from '../../assets/weatherIcon'

import styles from './Card.module.scss'


const Card = ({ days }) => {
    const { dt, temp, weather } = days


    const getUnix = (option) => {
        const now = new Date(dt * 1000)
        let res = option === 'month' ? now.toLocaleString('ru-RU', { month: 'long' }) :
            option === 'weekday' ? now.toLocaleString('ru-RU', { weekday: 'long' }) :
                option === 'day' ? now.toLocaleString('ru-Ru', { day: 'numeric' }) : ''

        return res
    }


    return (
        <div className={styles['card']}>
            <div className={styles['card__day']}>
                {getUnix('weekday')}
            </div>
            <div className={styles['card__date']}>
                {getUnix('day')} {getUnix('month').length > 4 ? getUnix('month').slice(0, 3) : getUnix('month')}
            </div>
            <div className={styles['card__img']}>
                <WeatherIcon id={weather[0].description} />
            </div>
            <div className={styles['card__temp']}>
                {Math.trunc(temp.day)}°
            </div>
            <div className={styles['card__tempNight']}>
                {Math.trunc(temp.night)}°
            </div>
            <div className={styles['card__info']}>
                {weather[0].description}
            </div>
        </div>
    )
}

export default Card