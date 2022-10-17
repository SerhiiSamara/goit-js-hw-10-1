import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { markUpBuild } from './js/markUP';
import { onError } from './js/onError';
import CountriesApiService from './js/CountriesApiService';

const DEBOUNCE_DELAY = 300;
const contriesApiService = new CountriesApiService();
const debounced = require('lodash.debounce');
const refs = {
  input: document.querySelector('#search-box'),
  countryCotainer: document.querySelector('.country-list'),
};

refs.input.addEventListener('input', debounced(onInputHandl, DEBOUNCE_DELAY));

function onInputHandl(e) {
  contriesApiService.query = e.target.value.trim();

  if (contriesApiService.query === '') {
    return;
  }

  fetchCountries();
}

function fetchCountries() {
  contriesApiService
    .fetchCountries()
    .then(data => markUpBuild(data, refs.countryCotainer))
    .catch(error => onError(refs.countryCotainer));
}
