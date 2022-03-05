//Manager constructor 
const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager'); 

//creating manager object 
test ('Creates Manager object', () => {
    const manager = new Manager('Sami', 22, 'sami@gmail.com', 6); 

    expect(manager.officeNumber).toEqual(expect.any(Number)); 
}); 

//gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager ('Sami', 22, 'james@gmail.com', 6);
    expect(manager.getRole()).toEqual("Manager");
}); 