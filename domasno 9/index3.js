class BankAccount {
  constructor(accontNumber, accountHolder, balance){
    this.accontNumber = accontNumber
    this.accountHolder = accountHolder
    this.balance = balance
  }

  deposit(amount){
this.balance += amount
console.log(`Deposited: ${amount} balanse: ${this.balance}`)
  }

  withdraw(amount){
this.balance -= amount
console.log(`Withdrew: ${amount}, balance: ${this.balance}`)
  }

  getBalance(){
return `Account Number: ${this.accontNumber}, Account Holder: ${this.accountHolder}, Balance: ${this.balance}`
  }

}

const user = new BankAccount("100561646", "Sara Davceva", 5000)
const user2 = new BankAccount("100464346", "Marko Markovski",6000)
user.deposit(500)
user2.deposit(700)

user.withdraw(1000)
user2.withdraw(560)

console.log(user.getBalance())
console.log(user2.getBalance())