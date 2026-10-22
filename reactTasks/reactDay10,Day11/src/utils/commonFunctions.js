const API_BASE_URL = "http://localhost:5000/api";

async function getData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export async function countryApi() {
  const countries = await getData(`${API_BASE_URL}/countries`);
  return countries.sort((a, b) => a.name.localeCompare(b.name));
}

export const getCountries = countryApi;

export async function getStatesByCountry(countryId) {
  if (!countryId) return [];
  const states = await getData(`${API_BASE_URL}/states/${countryId}`);
  return states.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getCitiesByState(stateId) {
  if (!stateId) return [];
  const cities = await getData(`${API_BASE_URL}/cities/${stateId}`);
  return cities.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getCountryStateCity(countryId, stateId) {
  const [countries, states, cities] = await Promise.all([
    countryId ? countryApi() : Promise.resolve([]),
    stateId ? getStatesByCountry(countryId) : Promise.resolve([]),
    stateId ? getCitiesByState(stateId) : Promise.resolve([]),
  ]);

  return { countries, states, cities };
}

export async function uploadImageWithFormData(file) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return response.json();
}

export function resolveImageUrl(input) {
  if (!input) return "";
  const trimmed = input.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `http://localhost:5000/uploads/${trimmed.replace("uploads/", "")}`;
}

