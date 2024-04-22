/**
 * Retrieves the user's location information.
 * @returns An object containing the user's country, flag, and city.
 */
export async function getUserLocation() {
  const response = await fetch("https://geolocation.microlink.io");
  const { country, city } = await response.json();

  return {
    country: country.name as string,
    flag: country.flag as string,
    city: city.name as string,
  };
}
