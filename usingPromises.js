const api = require("./api-promise");
const $ = require("./ui");

const templates = { nameInAList: peep => $(`<li>${peep.name}</li>`) };

const peopleList = $('<ul class="no-fur-owners"></ul>');

const getPeopleForAnimalTypes = types =>
  api.getPerson(person =>
    person.pets.some(pet => {
      return types.includes(pet.type);
    })
  );

const extractAnimalTypes = furlessAnimals =>
  furlessAnimals.map(animal => animal.type);

const createUiElements = template => peopleWithFurlessPets => {
  return peopleWithFurlessPets.map(template);
};

const tap = f => x => {
  f(x);
  return x;
};

const appendElements = list => listItems => listItems.forEach(list.append);

const writeCompiledHtml = () => console.log(peopleList.compile());

const withoutFur = animal => !animal.fur;

api
  .getAnimal(withoutFur)
  .then(extractAnimalTypes)
  .then(getPeopleForAnimalTypes)
  .then(createUiElements(templates.nameInAList))
  .then(tap(appendElements(peopleList)))
  .then(tap(writeCompiledHtml));
