const data = require('./data');

const getAnimal = (predicate, callback) => {
  setTimeout(() => callback(data.animals.filter(predicate)), 2000);
};

const getPerson = (predicate, callback) => {
  setTimeout(() => callback(data.people.filter(predicate)), 2000);
};

module.exports = { getAnimal, getPerson };
