const api = require('./api-promise');
const $ = require('./ui');

const peopleList = $('<ul class="no-fur-owners"></ul>');

const getPeople = types =>
  api.getPerson(person =>
    person.pets.some(pet => {
      return types.includes(pet.type);
    })
  );

api
  .getAnimal(animal => !animal.fur)
  .then(furlessAnimals => furlessAnimals.map(animal => animal.type))
  .then(animalTypes => getPeople(animalTypes))
  .then(peeps => Promise.all(peeps))
  .then(peopleWithFurlessPets => {
    return peopleWithFurlessPets.map(peep => $(`<li>${peep.name}</li>`));
  })
  .then(listItems => listItems.forEach(peopleList.append))
  .then(() => console.log(peopleList.compile()));
