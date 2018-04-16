const fetchApi = (location) => {
  return (
    fetch(`http://api.wunderground.com/api/81347f06b321e144/conditions/forecast10day/hourly10day/q/${ location }.json`)
  )
}

export default fetchApi;