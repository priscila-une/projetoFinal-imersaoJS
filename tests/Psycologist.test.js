const Psycologist = require("../Psycologist");

const psycologistTest = new Psycologist("Maria Castro", "maria@email.com", ["10:00", "13:00"])
const psycologistName = psycologistTest.getName();

describe("Test of Class Psycologist",  () => {
    test("verify if instance of Psycologist is correctly", () => {
        expect(psycologistTest instanceof Psycologist ).toBe(true);
    });
    
    test("verify if getName return psycologist name", () => {
        expect(psycologistTest.getName()).toBe(psycologistName)
    })
})