const Intern = require('../lib/Intern');

console.log(new Intern());

test('Creates an Inter object', () => {
    const intern = new Intern('Dave', 1, 'dbomb@email.com', 'Trilogy Education');
    console.log(intern);
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.getRole()).toEqual('Intern');
});