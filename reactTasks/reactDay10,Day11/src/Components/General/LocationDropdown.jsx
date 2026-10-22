import { useEffect, useState } from "react";
import {
  getCitiesByState,
  getCountries,
  getStatesByCountry,
} from "../../utils/commonFunctions";

function LocationDropdown({ draft, onChangeLocation }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  useEffect(() => {
    let isMounted = true;

    getCountries()
      .then((data) => {
        if (isMounted) setCountries(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load countries:", err);
        if (isMounted) setCountries([]);
      })
      .finally(() => {
        if (isMounted) setLoadingCountries(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!draft?.country_id) {
      setStates([]);
      setCities([]);
      return;
    }

    let isMounted = true;
    setLoadingStates(true);

    getStatesByCountry(draft.country_id)
      .then((data) => {
        if (isMounted) setStates(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load states:", err);
        if (isMounted) setStates([]);
      })
      .finally(() => {
        if (isMounted) setLoadingStates(false);
      });

    return () => {
      isMounted = false;
    };
  }, [draft?.country_id]);

  useEffect(() => {
    if (!draft?.state_id) {
      setCities([]);
      return;
    }

    let isMounted = true;
    setLoadingCities(true);

    getCitiesByState(draft.state_id)
      .then((data) => {
        if (isMounted) setCities(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Failed to load cities:", err);
        if (isMounted) setCities([]);
      })
      .finally(() => {
        if (isMounted) setLoadingCities(false);
      });

    return () => {
      isMounted = false;
    };
  }, [draft?.state_id]);

  const handleCountryChange = (event) => {
    const countryId = event.target.value;
    const country = countries.find(
      (item) => String(item._id) === String(countryId),
    );

    setCities([]);
    onChangeLocation({
      country_id: countryId || "",
      country_name: country?.name || "",
      state_id: "",
      state_name: "",
      city_id: "",
      city_name: "",
    });
  };

  const handleStateChange = (event) => {
    const stateId = event.target.value;
    const state = states.find((item) => String(item._id) === String(stateId));

    onChangeLocation({
      country_id: draft?.country_id || "",
      country_name: draft?.country_name || "",
      state_id: stateId || "",
      state_name: state?.name || "",
      city_id: "",
      city_name: "",
    });
  };

  const handleCityChange = (event) => {
    const cityId = event.target.value;
    const city = cities.find((item) => String(item._id) === String(cityId));

    onChangeLocation({
      country_id: draft?.country_id || "",
      country_name: draft?.country_name || "",
      state_id: draft?.state_id || "",
      state_name: draft?.state_name || "",
      city_id: cityId || "",
      city_name: city?.name || "",
    });
  };

  const locationText =
    draft?.country_name && draft?.city_name
      ? `${draft.country_name} - ${draft.city_name}`
      : draft?.country_name
        ? draft.country_name
        : "Select Location";

  return (
    <div style={{ marginBottom: "15px" }}>
      <label
        style={{ fontWeight: "bold", display: "block", marginBottom: "8px" }}
      >
        Location:
      </label>

      <div
        style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "#374151",
          fontWeight: 600,
        }}
      >
        {locationText}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "10px",
        }}
      >
        <select
          value={draft?.country_id || ""}
          onChange={handleCountryChange}
          disabled={loadingCountries}
          style={{
            padding: "8px 10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            background: loadingCountries ? "#f3f4f6" : "#fff",
          }}
        >
          <option value="">
            {loadingCountries ? "Loading countries..." : "Select Country"}
          </option>
          {countries.map((country) => (
            <option key={country._id} value={country._id}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          value={draft?.state_id || ""}
          onChange={handleStateChange}
          disabled={!draft?.country_id || loadingStates || states.length === 0}
          style={{
            padding: "8px 10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            background:
              !draft?.country_id || loadingStates || states.length === 0
                ? "#f3f4f6"
                : "#fff",
          }}
        >
          <option value="">
            {loadingStates
              ? "Loading states..."
              : draft?.country_id
                ? states.length === 0
                  ? "No states found"
                  : "Select State"
                : "Select Country First"}
          </option>
          {states.map((state) => (
            <option key={state._id} value={state._id}>
              {state.name}
            </option>
          ))}
        </select>

        <select
          value={draft?.city_id || ""}
          onChange={handleCityChange}
          disabled={!draft?.state_id || loadingCities || cities.length === 0}
          style={{
            padding: "8px 10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            background:
              !draft?.state_id || loadingCities || cities.length === 0
                ? "#f3f4f6"
                : "#fff",
          }}
        >
          <option value="">
            {loadingCities
              ? "Loading cities..."
              : draft?.state_id
                ? cities.length === 0
                  ? "No cities found"
                  : "Select City"
                : "Select State First"}
          </option>
          {cities.map((city) => (
            <option key={city._id} value={city._id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default LocationDropdown;
