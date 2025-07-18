export const fetchWeather = async (area, setContent, setAlerts, setPlaces, setTemperature) => {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=2f9dc6d17e204d8fbd084537251507&q=${encodeURIComponent(area)}`);
    const data = await res.json();
    const tempC = data?.current?.temp_c;
    const condition = data?.current?.condition?.text;

    const emojiMap = {
      Sunny: "☀️", Clear: "🌤️", Rain: "🌧️", Thunderstorm: "⛈️",
      Snow: "❄️", Cloudy: "☁️", Overcast: "🌥️"
    };

    const conditionEmoji = emojiMap[condition] || "🌈";

    setTemperature(tempC);
    setContent(`Current temperature in ${area} is ${tempC}°C and the weather is ${conditionEmoji} ${condition}.`);
    setAlerts([]);
    setPlaces([]);
  } catch {
    setContent('Unable to fetch weather data.');
  }
};