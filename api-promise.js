const data = require('./data');

const getAnimal = predicate =>
  new Promise(resolve => {
    setTimeout(() => resolve(data.animals.filter(predicate)), 2000);
  });

const getPerson = predicate =>
  new Promise(resolve => {
    setTimeout(() => resolve(data.people.filter(predicate)), 2000);
  });

module.exports = { getAnimal, getPerson };
