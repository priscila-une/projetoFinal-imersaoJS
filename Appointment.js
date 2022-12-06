const Mother = require('./Mothers');
const Psycologist = require('./Psycologist');

class Appointment {
    constructor(mother, psycologist , schedules){
        //isntancia mother e psycologa 
        if(mother instanceof Mother){
            this.mother = mother;
        }
        if(psycologist instanceof Psycologist){
            this.psycologist = psycologist;
            this.psycologist.schedules = schedules;
        }
    }
}

module.exports = Appointment;