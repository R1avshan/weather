import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useSelector, useDispatch } from 'react-redux';
import ThisDay from "./components/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo";
import Days from "./components/Card/Days";
import { loadCityWeather } from "./store/weather/weatherActions";

function App() {
  const { theme } = useSelector(state => state)
  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')
  const [searchValue, setSearchValue] = useState('Ташкент')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    dispatch(loadCityWeather(searchValue, searchValue))
  }, [searchValue])

  return (
    <div className="container">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="wrapper">
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
}

export default App;
