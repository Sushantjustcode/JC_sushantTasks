import { useState, useEffect, useRef } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherInfo from "./Components/WeatherInfo";
import Loading from "./Components/Loading";
import ErrorMessage from "./Components/ErrorMessage";
import Counter from "./Components/Counter";


function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const API_KEY = "7145657246b83f0f559b460db478da6d";

  useEffect(() => {
    if (!city.trim()) {
      return;
    }

    fetchWeather();
  }, [city]);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${API_KEY}` +
        `&units=metric`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      console.log(data);

      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputValue = inputRef.current.value.trim();

    if (!inputValue) {
      return;
    }

    setCity(inputValue);

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-linear-to-br from-sky-400 via-cyan-300 to-blue-500 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Weather Card */}
        <div className="rounded-2xl border border-white/50 bg-white/90 p-6 shadow-2xl shadow-blue-900/20 backdrop-blur-xl sm:p-8">

          <Counter />

          {/* Header */}
          <div className="mb-7 text-center">
            <div className="mb-3 text-4xl">🌤️</div>

            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              Weather App
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Check the weather anywhere in the world
            </p>
          </div>

          {/* Search */}
          <SearchBar inputRef={inputRef} handleSubmit={handleSubmit} />

          {/* Loading */}
          {loading && <Loading />}

          {/* Error */}
          {error && <ErrorMessage message={error} />}

          {/* Weather */}
          {weather && !loading && <WeatherInfo weather={weather} />}
        </div>


        <p className="mt-4 text-center text-xs font-medium text-white/70">
          Real-time weather information
        </p>
      </div>
    </main>
  );
}

export default App;
