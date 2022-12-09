const Mother = require('../Mothers');
const mother = new Mother("Larissa Silva", "larissa@email.com");

describe("Test of Class Mother", () => {
    test("Verify if instance of Mother is correctly", () => {
        expect(mother instanceof Mother).toBe(true);
    });

})