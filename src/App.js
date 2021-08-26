/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  WiCloudy, WiSnowWind,
  WiRain, WiSprinkle, WiStormShowers, WiDirectionDown, WiDirectionUp, WiDaySunny, WiDegrees,
  WiCelsius, WiSleet,
} from 'react-icons/wi';
import { IoEarth } from 'react-icons/io5';

const api = {
  key: 'de0d86df65632bd13e81cbf606301c6a',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
        });
    }
  };

  const searchClick = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery('');
      });
  };

  const dateConvert = (h) => {
    const date = new Date(h * 1000);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
  };

  const imgSelect = () => {
    // RECEBENDO O TIPO DE CLIMA PARA COMPARAR
    const clime = weather.weather[0].main.toLowerCase();

    // TEMPERATURA ACIMA DE 17 ICONS BRANCOS
    if (weather.main.temp > 17) {
      if (clime === 'clouds') {
        return <WiCloudy size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'clear') {
        return <WiDaySunny size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'rain') {
        return <WiRain size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'drizzle') {
        return <WiSprinkle size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'thunderstorm') {
        return <WiStormShowers size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'snow') {
        return <WiSnowWind size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'mist') {
        return <WiSleet size={180} style={{ fill: 'white' }} />;
      }
      return <WiCloudy size={180} style={{ fill: 'white' }} />;
    }
    // TEMPERATURA ENTRE 6 E 17 ICONS BRANCOS
    if (weather.main.temp > 6 && weather.main.temp < 17) {
      if (clime === 'clouds') {
        return <WiCloudy size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'clear') {
        return <WiDaySunny size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'rain') {
        return <WiRain size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'drizzle') {
        return <WiSprinkle size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'thunderstorm') {
        return <WiStormShowers size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'snow') {
        return <WiSnowWind size={180} style={{ fill: 'white' }} />;
      }
      if (clime === 'mist') {
        return <WiSleet size={180} style={{ fill: 'white' }} />;
      }
      return <WiCloudy size={180} style={{ fill: 'white' }} />;
    }
    // TEMPERATURA ABAIXO DE 6 ICONS PRETOS
    if (weather.main.temp < 6) {
      if (clime === 'clouds') {
        return <WiCloudy size={180} style={{ fill: 'black' }} />;
      }
      if (clime === 'clear') {
        return <WiDaySunny size={180} style={{ fill: 'black' }} />;
      }
      if (clime === 'rain') {
        return <WiRain size={180} style={{ fill: 'black' }} />;
      }
      if (clime === 'drizzle') {
        return <WiSprinkle size={180} style={{ fill: 'black' }} />;
      }
      if (clime === 'thunderstorm') {
        return <WiStormShowers size={180} style={{ fill: 'black' }} />;
      }
      if (clime === 'snow') {
        return <WiSnowWind size={180} style={{ fill: 'black' }} />;
      }
      if (clime === 'mist') {
        return <WiSleet size={180} style={{ fill: 'black' }} />;
      }
      return <WiCloudy size={180} style={{ fill: 'white' }} />;
    }
    return <WiCloudy size={180} style={{ fill: 'white' }} />;
  };

  return (
    <div className={(typeof weather.main !== 'undefined')
      ? ((weather.main.temp > 17) ? 'App sunny'
        : (weather.main.temp > 6) ? 'App' : 'App cold') : 'App main'}
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Buscar..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main !== 'undefined') ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name.toUpperCase()}</div>
              <div className="weather">{weather.weather[0].main.toLowerCase()}</div>
            </div>
            <div className="elements-temp">
              <div className="setCelsius"><WiCelsius size={80} /></div>
              <div className="setArrows">
                <div className="arrow1"><WiDirectionUp
                  size={30}
                  style={{ fill: 'GrayText' }}
                />
                </div>
                <div className="arrow2"><WiDirectionDown
                  size={50}
                  style={{ fill: 'GrayText' }}
                />
                </div>
              </div>
              <div className="max-and-min">
                <div className="temp-max">{Math.round(weather.main.temp_max)}<WiDegrees /></div>
                <div className="temp-min">{Math.round(weather.main.temp_min)}<WiDegrees /></div>
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}
              </div>
            </div>
            <div className="img">
              {imgSelect()}
            </div>
            <div className="names-temps">
              <div className="latitud">latitud</div>
              <div className="longitud">longitud</div>
            </div>
            <div className="first-box">
              <div className="lat">{weather.coord.lat}</div>
              <div className="lon">{weather.coord.lon}</div>
            </div>
            <div className="names-things">
              <div className="wind-speed">wind-speed</div>

              <div className="sunrise">sunrise</div>

              <div className="sunset">sunset</div>

              <div className="humidity">humidity</div>
            </div>
            <div className="second-box">
              <div className="wind-speed">{(weather.wind.speed)}m/s</div>
              <div className="sunrise">{(dateConvert(weather.sys.sunrise))}</div>
              <div className="sunset">{(dateConvert(weather.sys.sunset))}</div>
              <div className="humidity">{weather.main.humidity}%</div>
            </div>
          </div>
        )
          : (
            <>
              <div className="render-main">
                <div className="weather-title">WEATHER</div>
                <div className="weather-subtitle">select a city</div>
                <div className="main-img">
                  <IoEarth
                    size={350}
                    style={{ fill: 'white' }}
                  />
                </div>
                <form>
                  <div className="select-main">
                    <select
                      onChange={(e) => setQuery(e.target.value)}
                      value={query}
                    >
                      <option defaultValue>Escolha uma das opções</option>
                      <option value="Dallol">Dallol</option>
                      <option value="Fairbanks">Fairbanks</option>
                      <option value="Londres">Londres</option>
                      <option value="Recife">Recife</option>
                      <option value="Vancouver">Vancouver</option>
                      <option value="Yakutsk">Yakutsk</option>
                    </select>
                  </div>
                  <button className="button-main" type="button" onClick={searchClick}>
                    Ver Clima
                  </button>
                </form>
              </div>
            </>
          )}
      </main>
    </div>
  );
}

export default App;
