const api = require('./api-promise');

const animalsNeeded = ['cat', 'fish', 'bird'];

const promises = animalsNeeded.map(api.getAnimalByType);

const results = Promise.all(promises).then(console.log);
