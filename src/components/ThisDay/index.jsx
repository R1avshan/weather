import React from 'react'

import styles from './ThisDay.module.scss';
import sunIcon from '../../assets/icons/sun.svg'
import { useSelector } from 'react-redux';
import { selectWeather, selectWeatherDescription } from '../../store/weather/weatherSelectors';
import WeatherIcon from '../../assets/weatherIcon';

const ThisDay = () => {
    const { current, name } = useSelector(selectWeather)
    const descr = useSelector(selectWeatherDescription)

    console.log(descr);

    return (
        <div className={styles['thisDay']}>
            <div className={styles['thisDay__topBlock']}>
                <div className={styles['thisDay__wrapper']}>
                    <div className={styles['thisDay__temp']}>
                        {Math.trunc(current.temp)}°
                    </div>
                    <h4 className={styles['thisDay__day']}>
                        Сегодня
                    </h4>
                </div>
                <WeatherIcon id={descr} />
            </div>
            <div className={styles['thisDay__bottomBlock']}>
                <p className={styles['thisDay__info']}>
                    Время: 21:54
                </p>
                <p className={styles['thisDay__info']}>
                    Город: {name}
                </p>
            </div>
        </div>
    )
}

export default ThisDay