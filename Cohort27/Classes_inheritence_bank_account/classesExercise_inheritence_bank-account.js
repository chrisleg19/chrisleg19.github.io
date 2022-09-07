
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
let balance = 100
class BankAccount{
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName
        this.balance = balance
        this.acctNum = acctNum
    }

    deposit(dollarAmount){
        balance += dollarAmount
        console.log(`Thank you for the deposit, you balance is $${balance}.`)
    }

    withdraw(dollarAmount){
        if(dollarAmount <= balance && this.status !== "black"){
        console.log(`Please take your cash of $${dollarAmount}.`);
        let amount = balance -= dollarAmount
        console.log(`Your remaining balance is $${amount}.`);
        } else {
            this.status = "black"
            console.log(`Sorry, insufficient funds.  Your balance is $${balance}`);
        }        
    }
}

class CheckingAccount extends BankAccount{
    constructor(ownerName, balance, acctNum, status){
        super(ownerName, balance, acctNum)
        this.overdraftEnabled = false
        this.status = status || "bronze"
    }
    
    overrideWithdraw(){
        if (this.status === "gold"){
            this.overdraftEnabled = true;
            console.log(`Thank you ${this.status} member.  Your overdraft is enabled.`);
        } else{
            console.log(`Thank you for your business.  Overdraft is exclusive to gold members only.`);
        }
    }

}

class SavingsAccount extends BankAccount{
    
    overrideWithdraw(){
        this.status = "black"
        }
    }
    
    
const bankAct1 = new BankAccount ("Chris", 500, 12345, )
const checking = new CheckingAccount("Chris", 500, 12345, )
const savings = new SavingsAccount("Chris", 500, 12345, )


console.log(bankAct1);
console.log(checking);
console.log(savings);

savings.overrideWithdraw()
checking.withdraw(50);

