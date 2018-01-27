module.exports = {
  animals: [
    { type: 'cat', legs: 4, tail: true, fur: true },
    { type: 'snake', legs: 0, tail: true, fur: false },
    { type: 'gorilla', legs: 2, tail: false, fur: true },
    { type: 'fish', legs: 0, tail: true, fur: false },
    { type: 'bird', legs: 2, tail: true, fur: false }
  ],
  people: [
    { name: 'Sally', pets: [{ type: 'cat' }] },
    { name: 'Edward', pets: [{ type: 'fish' }, { type: 'dog' }] },
    { name: 'Frank', pets: [{ type: 'bird' }, { type: 'bird' }] },
    { name: 'Tammy', pets: [{ type: 'snake' }] }
  ]
};
