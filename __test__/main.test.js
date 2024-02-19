const someFunction = require('../src/somefile')

test('adds 1 + 2 to equal 3', () => {
    expect(someFunction(1, 2)).toBe(3);
});