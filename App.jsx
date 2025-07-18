import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header';
import ButtonGroup from './components/ButtonsGroup';
import ContentArea from './components/ContentArea';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import './index.css';
import { fetchWiki } from './utils/FetchWiki';
import { fetchWeather } from './utils/FetchWeather';
import { fetchFamousSites } from './utils/FetchFamousSites';
import{fetchAlerts} from './utils/FetchAlerts';


function App() {
  const defaultTitle = 'Welcome to Local-Guide';
  const defaultContent = `Welcome to Local-Guide, your go-to guide for navigating the world with ease...`;

  const [area, setArea] = useState('');
  const [title, setTitle] = useState(defaultTitle);
  const [content, setContent] = useState(defaultContent);
  const [alerts, setAlerts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [temperature, setTemperature] = useState(null);

  const ads = [
    { img: '/src/logo.jpg', link: 'https://yourstore.com' },
    { img: 'https://via.placeholder.com/250x300?text=Local+Cafe', link: 'https://yourcafe.com' }
  ];

  useEffect(() => {
    if (!area) {
      setTitle(defaultTitle);
      setContent(defaultContent);
      setAlerts([]);
      setPlaces([]);
      setTemperature(null);
    } else {
      setTitle(`Welcome to ${area}`);
      fetchWiki();
    }
  }, [area]);
  

  return (
    <>
      <Header area={area} setArea={setArea} />
      <div className="layout-offset">
        <h2 style={{ color: '#4b6cb7' }}>{title}</h2>
        <ButtonGroup
          fetchWeather={() => fetchWeather(area, setContent, setAlerts, setPlaces, setTemperature)}
          fetchWiki={() => fetchWiki(area, setContent, setAlerts, setPlaces, setTemperature)}
          fetchAlerts={() => fetchAlerts(area, setContent, setAlerts, setPlaces, setTemperature)}
          fetchFamousSites={() => fetchFamousSites(area, setContent, setAlerts, setPlaces, setTemperature)}
        />
      </div>
      <div className="container">
        <ContentArea content={content} temperature={temperature} alerts={alerts} places={places} />
        <Sidebar ads={ads} />
      </div>
      <Footer />
    </>
  );
}

export default App;