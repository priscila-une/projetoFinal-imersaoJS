const Person = require('./Person');
const Mother = require('./Mothers');
const Psycologist = require('./Psycologist');
const Appointment = require('./Appointment');

const mother1 = new Mother("Evelin", "evelin@email.com");
const psycologist1 = new Psycologist("Janaina", "janaina@email.com", ["9:00", "10:00"])
const appointment1 = new Appointment(mother1, psycologist1, psycologist1.schedules);

//console.log(person1);
//console.log(mother1);
//console.log(psycologist1);
console.log(appointment1);

