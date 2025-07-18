export const fetchWiki = async (area, setContent, setAlerts, setPlaces, setTemperature) => {
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(area)}`);
    if (!res.ok) throw new Error('Not found');
    const data = await res.json();
    setContent(data.extract);
    setAlerts([]);
    setPlaces([]);
    setTemperature(null);
  } catch {
    setContent('No information found.');
  }
};