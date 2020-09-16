import bankAccount from '../bankAccount'

//describe takes i a description as well. 
describe('Bank account methods and properties', () => {
  //runs before each test block
  beforeEach(() => {
    bankAccount.balance = 1000
  })

  test('Initial balance is 1000.', () => {
    expect(bankAccount.balance).toBe(1000)
  })

  test('Test if depositMoney correct alters balance', () => {
    bankAccount.depositMoney(2000)
    expect(bankAccount.balance).toBe(3000)
  })

  test('withdrawMoney should correctly alter balance', () => {
    bankAccount.withdrawMoney(2000)
    expect(bankAccount.balance).toBe(1000 - 2000)
  })
})