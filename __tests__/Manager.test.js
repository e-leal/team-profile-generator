const Manager = require('../lib/Manager');

console.log(new Manager());

test('Creates an Manager object', () => {
    const manager = new Manager('Dave', 1, 'dbomb@email.com', 12);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.getRole()).toEqual('Manager');
});
