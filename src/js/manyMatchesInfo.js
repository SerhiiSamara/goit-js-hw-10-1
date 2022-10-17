export function manyMatchesInfo() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter more specific name.',
    {
      timeout: 2000,
    }
  );
}
