const { add } = require('./app');
if (add(2,3) !==6) {throw new Error('add failed'); }
console.log('All tests passed');
