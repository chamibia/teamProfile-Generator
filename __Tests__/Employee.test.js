//use Employee constructor
const Employee = require('../lib/Employee');

//creates employee object 
test ('creates an employee object', ()=> {
    const employee = new Employee('Bia', 35, 'b.chami39@gmail.com'); 

    expect(employee.name).toEqual(expect.any(toString));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
}); 

//get id from getId()
test ('gets employee name', () => {
    const employee = new Employee('Bia', 35, 'b.chami39@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
}); 

//gets email from getEmail()
test('gets employee email', () => {
    const employee = new Employee ('Bia', 35, 'b.chami39@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))

}); 

//get role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Bia', 35, 'b.chami39@gmail.com'); 
    
    expect(employee.getRole()).toEqual("Employee");
}); 