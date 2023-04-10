import React from 'react'

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import themeSwitch from '../../assets/icons/themeSwitch.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/theme/themeActions';




const Header = ({ searchInput, setSearchInput, searchValue, setSearchValue }) => {
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state)


    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
    }

    const handleChangeInput = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchValue(searchInput)
        setSearchInput('')
    }


    return (
        <header className={styles['header']}>
            <div className={styles['header__left']}>
                <a href="" className={styles['header__logo']}>
                    <img src={logo} alt="logo" />
                    React weather
                </a>
            </div>
            <div className={styles['header__right']}>
                <img
                    onClick={toggleTheme}
                    src={themeSwitch}
                    alt="switcher"
                />
                <form onSubmit={handleSubmit}>
                    <input
                        className={styles['header__input']}
                        type="text"
                        placeholder='Выбрать город...'
                        value={searchInput}
                        onChange={handleChangeInput}
                    />
                </form>
            </div>
        </header>
    )
}

export default Header