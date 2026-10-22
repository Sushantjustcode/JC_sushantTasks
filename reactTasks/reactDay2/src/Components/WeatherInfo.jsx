import WeatherDetails from "./WeatherDetails";

function WeatherInfo({ weather }) {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900">{weather.name}</h2>

      <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
        {weather.sys.country}
      </p>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto h-28 w-28 drop-shadow-lg"
      />

      <h3 className="text-6xl font-black tracking-tight text-slate-900">
        {Math.round(weather.main.temp)}
        <span className="text-3xl text-blue-500">°C</span>
      </h3>

      <p className="mt-2 text-sm font-medium capitalize text-slate-500">
        {weather.weather[0].description}
      </p>

      <WeatherDetails weather={weather} />
    </div>
  );
}

export default WeatherInfo;
