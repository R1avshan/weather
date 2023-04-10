import React from 'react'
import Card from '..'
import {useSelector} from 'react-redux'
import styles from './Days.module.scss'

const Days = () => {
    const {weather} = useSelector(state => state.weather)
    
    console.log(weather.daily[0].temp);

    return (
        <div className={styles['days']}>
            {weather.daily.map(day => (
                <Card days={day} />
            ))}
        </div>
    )
}

export default Days