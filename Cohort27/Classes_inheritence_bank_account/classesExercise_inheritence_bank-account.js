//====Static Methods=========

// class Governor{

//          name = "George";
//          state = "Georgia";
//          popular = true
//          communityService(service){
//             return `Off to serve my community and ${service}`
//         }
// }

// Governor.name="Sam"
// console.log(Governor);

// class newMember extends Governor{

// }

// console.log(newMember)

//====Inheritance===========

// class Person{
//     constructor(hair, eyes, height){
//         this.hair = hair || "black"
//         this.eyes = eyes || "brown"
//         this.height= height || "6ft 2in"
//     }

//     eating(food){
//         console.log(`This ${food} tastes really good!`);
//     }

//     sleeping(time){
//         console.log(`Its ${time}! no wonder i'm tired, it's past my bedtime.`);
//     }
//     driving(destination){
//         console.log(`I hope there is no traffic going to ${destination}`);
//     }
// }

// class PostalWorker extends Person{
//     constructor(hair, eyes, height){
//     super(hair, eyes, height);
//     }
//     deliverMail(zipcode){
//         console.log(`People living in ${zipcode} will get their mail today`);
//     }

//     dropAtFrontDoor(weight){
//         console.log(`Because this packaged weighed ${weight}, I needed to drop it off at the front door`);
//     }
// }

// class PostalWorker2 extends PostalWorker{
//     constructor(hair, eyes, height){
//     super(hair, eyes, height);
//     this.hair = "blue"
//     this.eyes = "green"
//     this.height = "5ft"
//     }
// }

// class Chef extends Person{
//     constructor(hair, eyes, height){
//     super(hair, eyes, height);
//     }
//     cooking(meal){
//         console.log(`${meal} is on the menu today.`);
//     }

//     openRestaurant(meal){
//     if(meal === "dinner"){
//         console.log(`Its ${meal} time and we're open`);
//     } else {
//         console.log(`Its not dinner time, please come back later.`);

//     }
// }
// }

// class Chef2 extends Chef{
//     constructor(hair, eyes, height){
//         super(hair, eyes, height);
//         this.hair = "red"
//         this.eyes = "blue"
//         this.height = "7ft"
//         }

// }

// const original = new Person()
// const chef1 = new Chef()
// const chef2 = new Chef2()
// const pWorker = new PostalWorker()
// const pWorker2 = new PostalWorker2()

// console.log(original)
// console.log(chef1)
// console.log(chef2)
// console.log(pWorker)
// console.log(pWorker2)

// chef1.driving("home")
// pWorker.driving("church")
// pWorker2.dropAtFrontDoor("50 lbs.")
// chef2.openRestaurant("dinner")

// console.log(original);
// chef2.hair = "green"
// console.log(original);
// console.log(chef2);

//===========Bank Accounts============
let balance;

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }

  deposit(dollarAmount) {
    this.balance += dollarAmount;
    console.log(`Thank you for the deposit, you balance is $${this.balance}.`);
  }

  withdraw(dollarAmount) {
    if (dollarAmount <= this.balance && this.status !== "black" || this.status ==="gold") {
      console.log(`Please take your $${dollarAmount}.`);
      this.balance -= dollarAmount;
      console.log(`Your balance is $${this.balance}.`);
    } else {
      this.status = "black";
      console.log(
        `Sorry, you cannot withdraw $${dollarAmount}.  Your balance is $${this.balance}. Your status is black and withdrawals are unavailable.  Please contact customer support @ (1-800-UR-BROKE).`
      );
    }
  }
  set updateStatus(status){
    this.status = status.toLowerCase()
  }

}

class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, status) {
    super(ownerName, balance, acctNum);
    this.overdraftEnabled = false;
    this.status = status.toLowerCase() || "bronze";
  }

  overrideWithdraw(){
    this.status = "gold"
    this.overdraftEnabled = true
    console.log(`Thank you for being a ${this.status} member.  Overdraft is now enabled.`)
  }

  // overrideWithdraw() {
  //   if (this.status === "gold") {
  //     this.overdraftEnabled = true;
  //     console.log(
  //       `Thank you for being a ${this.status} member.  Overdraft is now enabled.`
  //     );
  //   } else {
  //     console.log(
  //       `Thank you for your business.  Overdraft is exclusive to gold members.`
  //     );
  //   }
  // }
}

class SavingsAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, status){
    super(ownerName, balance, acctNum);
    this.status = status || checking.status
  }


  overrideWithdrawS() {
    this.status = "black";
    console.log(`Your status is ${this.status}, therefore withdrawals are unavailable.  Please contact customer support @ (1-800-UR-BROKE).`);
  }
}

const account = new BankAccount("Chris", 500, 12345);
const checking = new CheckingAccount("Chris", 500, 12345, "BRONZE")
const savings = new SavingsAccount("Chris", 500, 12345, "Bronze")

//Figure out how to link the dollar amounts from each account.  Dollar amount between 3 accounts do not carry over. 

console.log(checking)
checking.deposit(100)
console.log(checking);
checking.withdraw(200)
console.log(checking);
checking.updateStatus = "black"
console.log(checking);
checking.withdraw(200)
savings.overrideWithdrawS()
console.log(checking);
checking.overrideWithdraw()
checking.withdraw(1000)


// account.deposit(100);
// console.log(account);
// console.log(checking);
// console.log(savings);


// console.log(account);
// console.log(checking);
// checking.overrideWithdraw();
// console.log(checking);
// checking.withdraw(900)
// console.log(checking);
// checking.updateStatus = "black"
// console.log(checking);
// checking.withdraw(900)
// console.log(savings);
// savings.overrideWithdrawS()
// console.log(savings);
// savings.withdraw(10);


// account.deposit(100);
// console.log(account);
// account.withdraw(900)
// console.log(account);
// account.updateStatus = "Gold"
// console.log(account);

// console.log(checking);
// console.log(savings);

// savings.overrideWithdraw()

// console.log(savings)
// account.withdraw()
