//use Engineer constructor 
const Engineer = require('../lib/Engineer');

//create engineer object for the test
test('Creates Engineer object', () => {
    const engineer = new Engineer('Marc', '12', 'marc@gmail.com', 'chamima');
    
    expect(engineer.getName()).toEqual('Marc')
    expect(engineer.getId()).toBe('12')
    expect(engineer.getEmail()).toEqual('marc@gmail.com')
    expect(engineer.getGithub()).toEqual('chamima')
});
