export function onError(element) {
  Notiflix.Notify.failure(`Ooops, there is no country with that name!`, {
    timeout: 2000,
  });
  element.innerHTML = '';
}
