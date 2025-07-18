export const fetchFamousSites = async (area, setContent, setAlerts, setPlaces, setTemperature) => {
    try {
      const apiKey = '8dae6ae9c2314dfdbd6adb3333ef4333';
      const geoRes = await axios.get(`https://api.geoapify.com/v1/geocode/search`, {
        params: { text: area, apiKey }
      });

      const location = geoRes.data.features[0]?.geometry;
      if (!location) throw new Error("Location not found");

      const placesRes = await axios.get(`https://api.geoapify.com/v2/places`, {
        params: {
          categories: 'tourism.sights',
          filter: `circle:${location.coordinates[0]},${location.coordinates[1]},5000`,
          limit: 10,
          apiKey,
        }
      });

      const names = placesRes.data.features.map(p => p.properties.name || 'Unnamed Place');
      setPlaces(names);
      setContent('');
      setAlerts([]);
      setTemperature(null);
    } catch {
      setContent('No famous sites found.');
    }}