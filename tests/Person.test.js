const Person = require("../Person");

const person1 = new Person("Alana", "alana@email.com");

describe("Test of Class Person", () => {
    test("Verify if instance of Person is correctly", () => {
        const person = new Person();
        expect(person instanceof Person).toBe(true);
    });

    test("Should return email correct", () => {
        expect(person1.email).toEqual("alana@email.com")
    })

})