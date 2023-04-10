import React from 'react'
import ThisDayItem from './ThisDayInfoItem';

import styles from './ThisDayInfo.module.scss'
import cloud from '../../assets/images/cloud.png';
import { useSelector } from 'react-redux';
import { selectWeather, selectWeatherDescription } from '../../store/weather/weatherSelectors';

const ThisDayInfo = () => {
    const { current } = useSelector(selectWeather)
    const descr = useSelector(selectWeatherDescription)

    
    
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: `${Math.trunc(current.temp)}° - ощущается как ${Math.trunc(current.feels_like)}°`
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: `${current.pressure} мм ртутного столба`
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: descr === 'дождь' ? descr : 'Без осадков'
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: `${Math.trunc(current.wind_speed)} м/с`
        },
    ]

    return (
        <div className={styles['thisDayInfo']}>
            <div className={styles['thisDayInfo__items']}>
                {
                    items.map(item => (
                        <ThisDayItem
                            key={item.icon_id}
                            item={item}
                        />
                    ))
                }
            </div>
            <img src={cloud} alt="cloud" />
        </div>
    )
}

export default ThisDayInfo