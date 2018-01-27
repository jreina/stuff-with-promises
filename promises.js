const data = '   heL-lO--- -+wOr_lD  ';

const getData = () => Promise.resolve(data);

getData()
  .then(spy)
  .then(data => data.trim())
  .then(spy)
  .then(data => data.replace(/[-+_]/g, ''))
  .then(spy)
  .then(data => data.toLowerCase())
  .then(spy)
  .then(data => data + '!')
  .then(spy);
