function WeatherDetails({ weather }) {
  return (
    <div className="mt-8 grid grid-cols-3 gap-3">
      <div className="rounded-2xl bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:bg-blue-50">
        <span className="text-2xl">💧</span>

        <p className="mt-2 text-xs font-medium text-slate-400">Humidity</p>

        <strong className="mt-1 block text-sm font-semibold text-slate-800">
          {weather.main.humidity}%
        </strong>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:bg-blue-50">
        <span className="text-2xl">💨</span>

        <p className="mt-2 text-xs font-medium text-slate-400">Wind</p>

        <strong className="mt-1 block text-sm font-semibold text-slate-800">
          {weather.wind.speed} m/s
        </strong>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 text-center transition hover:-translate-y-1 hover:bg-blue-50">
        <span className="text-2xl">🌡️</span>

        <p className="mt-2 text-xs font-medium text-slate-400">Feels Like</p>

        <strong className="mt-1 block text-sm font-semibold text-slate-800">
          {Math.round(weather.main.feels_like)}°C
        </strong>
      </div>
    </div>
  );
}

export default WeatherDetails;
