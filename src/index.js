import countryTpl from "./templates/country-card.hbs";
import API from "./fetchCountries";
import getRefs from "./get-refs";

const debounce = require('lodash.debounce');


const refs = getRefs();
refs.searchForm.addEventListener('input', debounce(onSearch, 500))
function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
   API.fetchCountry(searchQuery)
    .then(renderCountryCard).catch(onFetchError).finally(() => form.reset());
};
function renderCountryCard(country) {
   const markup = countryTpl(country[0]);
  refs.cardContainer.innerHTML = markup;
};
function onFetchError(error) {
  return alert('Hello! I am an alert box!!Nothing was found!');
}
