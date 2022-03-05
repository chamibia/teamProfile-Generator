//use Employee constructor
const Employee = require('../lib/Employee');

//creates employee object 
test ('Creates employee object', ()=> {
    const employee = new Employee('Bia', '35', 'bia@gmail.com'); 

    expect(employee.getName()).toEqual('Bia')
    expect(employee.getId()).toBe('35');
    expect(employee.getEmail()).toEqual('bia@gmail.com')
}); 
