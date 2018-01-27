const api = require('./api-callback');
const $ = require('./ui');

const peopleList = $('<ul class="no-fur-owners"></ul>');

api.getAnimal(
  animal => !animal.fur,
  furlessAnimals => {
    const furLessAnimalNames = furlessAnimals.map(animal => animal.type);
    api.getPerson(
      person =>
        person.pets.some(pet => {
          return furLessAnimalNames.includes(pet.type);
        }),
      peopleWithFurlessPets => {
        peopleWithFurlessPets.forEach(peep => {
          const personListItem = $(`<li>${peep.name}</li>`);
          peopleList.append(personListItem);
        });
        console.log(peopleList.compile());
      }
    );
  }
);
