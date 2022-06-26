export const makeCountryInfoMarkup = country => {
  return country
    .map(({ flags, name, capital, population, languages }) => {
      return `<div class="country-container">
      <img src="${
        flags.png
      }" class="country-container-image"width="24" height="24" alt ="flag">
      <h2 class="name">${name}</h2>
      </div>
      <ul class="stats">
        <li>
          Capital: ${capital}
        </li>
        <li>
          Population: ${population}
        </li>
        <li>
          Languages: ${languages.map(lang => lang.name)}
        </li>`;
    })
    .join('');
};

export const makeCountryListMarkup = country => {
  return country
    .map(({ flags, name }) => {
      return `<div class="country-container">
      <img src="${flags.png}" class="country-container-image"width="24" height="24" alt ="flag">
      <h2 class="name">${name}</h2>
      </div>`;
    })
    .join('');
};
