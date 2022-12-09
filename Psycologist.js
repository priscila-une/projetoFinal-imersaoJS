const Person = require('./Person');

class Psycologist extends Person {
    
    schedules = [];
    static psycologistList = [];

    constructor(name, email, schedules){
        super(name, email)
        this.schedules = schedules;
        this.constructor.psycologistList.push({
            name: this.name,
            schedules: this.schedules
        })
    }

    getName(){
        return this.name;
    }
}


module.exports = Psycologist;