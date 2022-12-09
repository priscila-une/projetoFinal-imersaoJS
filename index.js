
const Mother = require('./Mothers');
const Psycologist = require('./Psycologist');



const mother1 = new Mother("Evelin", "evelin@email.com");
const psycologist1 = new Psycologist("Janaina", "janaina@email.com", ["9:00", "10:00"]);
const psycologist2 = new Psycologist("Fernanda", "fernanda@email.com", ["13:00", "14:00", "16:00"]);
const motherError = new Mother("Evelin");
console.log(motherError)
console.log(mother1.scheduleTime());



