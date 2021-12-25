//Manager constructor 
const Manager = require('../lib/Manager'); 

//creating manager object 
test ('creates a Manager object', () => {
    const manager = new Manager('Bia', 35, 'b.chami39@gmail.com', 3); 

    expect(manager.officeNumber).toEqual(expect.any(Number)); 
}); 

//gets role from getRole()
tests('gets role of employee', () => {
    const manager = new Manager ('Bia', 35, 'b.chami39@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 