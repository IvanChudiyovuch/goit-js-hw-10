import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
};

refs.input.addEventListener('input', onCountryNameInput);

function fetchCountry(countryName) {
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
    respons => respons.json()
  );
}

fetchCountry('ukraine').then(country => {
  console.log(country);
});

function onCountryNameInput(event) {
  const countryName = event.currentTarget.value;
}
