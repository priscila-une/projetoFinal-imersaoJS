const Person = require('./Person');

class Mother extends Person {

    constructor(name, email){
        super(name, email);
        
    }

    scheduleTime(){
        //agendar horario

    }
}

module.exports = Mother;
