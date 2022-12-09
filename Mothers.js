const Person = require('./Person');
const readlineSync = require('readline-sync');
const { psycologistList } = require('./Psycologist');

class Mother extends Person {
 
    constructor(name, email){
        super(name, email);
        
    }
    
    scheduleTime(){

        console.log(`\n Welcome ${this.name}, let's start the appointment.`)
        console.table(psycologistList);
        
        const formattedListPsycologistName = psycologistList.map(psy => `${psy.name} `)
        const index = readlineSync.keyInSelect(formattedListPsycologistName, "Choose one psychologist: ", {cancel: false})
        console.log("You choose psycologist " + formattedListPsycologistName[index] )
        
        const formattedListSchedules = psycologistList.map(psy => `${psy.schedules[index]}`)
        const time = readlineSync.keyInSelect(formattedListSchedules, "Choose time do you want to schedule: ", {cancel: false})
        console.log(` ${formattedListSchedules[time]}\n scheduled time successfuly`);
    }
    
}

module.exports = Mother;
