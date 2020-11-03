
const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountry(countryName) {
  const urlForCountry = `${BASE_URL}/${countryName}`;
 return fetch(urlForCountry).then(response => response.json()).catch(err=>console.log(err));
}
export default { fetchCountry }


