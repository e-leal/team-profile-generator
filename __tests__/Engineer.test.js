const Engineer = require('../lib/Engineer');

console.log(new Engineer());

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dbomb@email.com', 'e-leal');
    console.log(engineer);
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.getRole()).toEqual('Engineer');
});