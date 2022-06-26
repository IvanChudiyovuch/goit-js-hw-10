import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountry } from './fetchCountries';
import { makeCountryInfoMarkup } from './makeCountryMarkup';
import { makeCountryListMarkup } from './makeCountryMarkup';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryInfoContainer: document.querySelector('.country-info'),
  countryList: document.querySelector('.country-list'),
};

refs.input.addEventListener(
  'input',
  debounce(onCountryNameInput, DEBOUNCE_DELAY)
);

function onCountryNameInput(event) {
  const countryName = event.target.value.trim();

  if (countryName === '') {
    refs.countryInfoContainer.innerHTML = '';
    refs.countryList.innerHTML = '';
  } else {
    fetchCountry(countryName)
      .then(country => {
        if (country.length >= 10) {
          return Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }

        if (country.length > 1 && country.length < 10) {
          makeCountryListMarkup(country);
          refs.countryList.innerHTML = makeCountryListMarkup(country);

          refs.countryInfoContainer.innerHTML = '';
        }

        if (country.length === 1) {
          makeCountryInfoMarkup(country);
          refs.countryInfoContainer.innerHTML = makeCountryInfoMarkup(country);

          refs.countryList.innerHTML = '';
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        refs.countryList.innerHTML = '';
        refs.countryInfoContainer.innerHTML = '';
      });
  }
}
