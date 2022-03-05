//using Engineer constructor 
const Intern = require('../lib/Intern');

//creating intern object 
test ('creates an Intern object', () => {
    const intern = new Intern('James', 31, 'james@gmail.com', 'Testing College'); 

    expect(intern.school).toEqual(expect.any(String));
}); 

//gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('James', 31, 'james@gmail.com', 'Testing College'); 

    expect(intern.getRole()).toEqual("Intern");
}); 