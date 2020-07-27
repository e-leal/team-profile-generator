const Employee = require('../lib/Employee');

console.log(new Employee());

test('Creates an employee object', () => {
    const employee = new Employee('Dave', 1, 'dbomb@email.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.getRole()).toEqual('Employee');
});
