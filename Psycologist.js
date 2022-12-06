const Person = require('./Person');

class Psycologist extends Person {
    
    schedules = [];

    constructor(name, email, schedules){
        super(name, email)
        this.schedules = schedules;
    }

}


module.exports = Psycologist;