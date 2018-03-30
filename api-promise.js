const data = require('./data');

/**
 *
 * @param {(animal: T) => boolean} predicate
 */
const getAnimal = predicate =>
  new Promise(resolve => {
    setTimeout(() => resolve(data.animals.filter(predicate)), 2000);
  });

/**
 *
 * @param {string} type
 */
const getAnimalByType = type =>
  Promise.resolve(data.animals.find(animal => animal.type === type));

const getPerson = predicate =>
  new Promise(resolve => {
    setTimeout(() => resolve(data.people.filter(predicate)), 2000);
  });

module.exports = { getAnimal, getPerson, getAnimalByType };
