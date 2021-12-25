//use Engineer constructor 
const Engineer = require('../lib/Engineer');

//create engineer object 
test('Creates Engineer object', () => {
    const engineer = new Engineer('Bia', 35, 'b.chami39@gmail.com', 'chamibia');
    
    expect(engineer.github).toEqual(expect.any(String));
});

//gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer ('Bia', 35, 'b.chami39@gmail.com', 'chamibia');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.string()));
});

//gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer ('Bia', 35, 'b.chami39@gmail.com', 'chamibia');
    
    expect(engineer.getRole()).toEqual("Engineer");
}); 