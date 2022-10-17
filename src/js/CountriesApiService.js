const BASE_URL = 'https://restcountries.com/v2/';

export default class CountriesApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    return fetch(
      `${BASE_URL}name/${this.searchQuery}?fields=name,capital,population,flags,languages`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Fail response!');
      }
      return response.json();
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
