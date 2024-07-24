const randomNames = ['Алина', 'Борис', 'Кристина', 'Диана'];
const randomCities = ['Москва', 'Санкт-Петербург', 'Владивосток', 'Севастополь'];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomName() {
  return getRandomElement(randomNames);
}

function getRandomCity() {
  return getRandomElement(randomCities);
}

module.exports = {
  getRandomName,
  getRandomCity
};
