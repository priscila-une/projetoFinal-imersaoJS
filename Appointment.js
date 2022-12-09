const Mother = require('./Mothers');
const Psycologist = require('./Psycologist');


class Appointment {
    constructor(mother, psycologist ){
         
        if(mother instanceof Mother && psycologist instanceof Psycologist){
            this.mother = mother;
            this.psycologist = psycologist;
        } 
    }
}

module.exports = Appointment;