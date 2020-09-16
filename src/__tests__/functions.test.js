//importing functions from funciton.js (use require)
const { sum, sayHello } = require('../functions')


//string describes what each test is doing.
test('Sum adds 1 + 2 to equal 3.', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 2)).not.toBeNaN()
})

// Use npm run test 

test('sayHello returns hello', () => {
  expect(sayHello()).toBe('hello')
})

test('Object assignment.', () => {
  const data = { one: 1 }
  data["two"] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('Expect true to be falsy', () => {
  //toBeTruthy
  expect(false).toBeFalsy()
})

let names = ['John', 'Ariel', 'Zach']

test('Name array contrains Ariel', () => {
  expect(names).toContain('Ariel')
  expect(names).not.toContain('Scott')
})

