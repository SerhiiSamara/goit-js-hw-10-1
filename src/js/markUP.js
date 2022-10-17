import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { manyMatchesInfo } from './manyMatchesInfo';
import markup from './templates/markup.hbs';
import markupChoice from './templates/markupChoice.hbs';

export function markUpBuild(countries, element) {
  element.innerHTML = '';
  if (countries.length > 10) {
    manyMatchesInfo();
    return;
  }

  if (countries.length === 1) {
    // --------------------------Без HBS--------------------------------
    // let { name, capital, population, flags, languages } = countries[0];
    // const languageMarkup = languages.map(
    //   language => `<span class="subtitle-text"> ${language.name}</span>`
    // );
    // element.innerHTML = `<li class="elect-item"><div class="header-container"><img class="img" src=${flags.svg} alt=${name}><h1>${name}</h1></div><h2 class="subtile">Capital: <span class="subtitle-text">${capital}</span></h2><h2 class="subtile">Population: <span class="subtitle-text">${population}</span></h2><h2 class="subtile">Languages: <span class="subtitle-text">${languageMarkup}</span></h2></li>`;
    // return;

    // -----------------------------HBS----------------------------------
    element.innerHTML = markupChoice(countries[0]);
    return;
  }

  // ------------------------Без HBS---------------------------
  // const markup = countries
  //   .map(country => {
  //     let { flags, name } = country;
  //     return `<li class="list-item"><img class="img" src=${flags.svg} alt=${name}><p>${name}</p></li>`;
  //   })
  //   .join('');
  // element.innerHTML = markup;

  // -----------------------HBS------------------------------
  element.innerHTML = markup(countries);
}
