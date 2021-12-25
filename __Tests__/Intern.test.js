//using Engineer constructor 
const { createTestScheduler } = require('@jest/core');
const Intern = require('../lib/Intern');

//creating intern object 
test ('creates an Intern object', () => {
    const intern = new Intern('Bia', 35, 'b.chami39@gmail.com', 'UofT'); 

    expect(intern.school).toEqual(expect.any(String));
}); 

//get school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Bia', 35, 'b.chami39@gmail.com', 'UofT'); 

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString())); 
}); 

//gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Bia', 35, 'b.chami39@gmail.com', 'UofT'); 

    expect(intern.getRole()).toEqual("Intern");
}); 