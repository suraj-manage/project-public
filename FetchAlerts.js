export const fetchAlerts = async (area, setContent, setAlerts, setPlaces, setTemperature) => {
  try {
    const apikey = '5b11636c68643d7cd12543d734e4bef9';
    const res = await fetch(`https://gnews.io/api/v4/search?q=crime+in+${encodeURIComponent(area)}&lang=en&token=${apikey}`);
    const data = await res.json();
    const top5 = data.articles?.slice(0, 5);

    if (top5?.length) {
      setAlerts(top5);
      setContent('');
      setPlaces([]);
      setTemperature(null);
    } else {
      setContent('No local news found.');
    }
  } catch {
    setContent('Error fetching news.');
  }
};