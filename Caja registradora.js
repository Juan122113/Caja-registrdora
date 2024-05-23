function checkCashRegister(price, cash, cid)  {

  let money = cid.reverse();

  function ObjRet() {

    this.status = "",

    this.change = []

  }

  let insuf = new ObjRet();

  let closed = new ObjRet();
  
  let open = new ObjRet();
  
  let moneyDevol = cash - price; //96.74

  let moneyDevol2 = moneyDevol;

   let restMoneyDevAcc2 = 0;

  let values =  {

    "ONE HUNDRED":  100,

    "TWENTY":  20,

    "TEN":  10,

    "FIVE":  5,

    "ONE":  1,

    "QUARTER":  0.25,

    "DIME":  0.1,

    "NICKEL":  0.05,

    "PENNY":  0.01

  };

  let cashTypes =  Object.keys(values);

  for  (let i =  0; i < cashTypes.length; i++) {



    if  (moneyDevol > values[cashTypes[i]] && money[i][1] != 0)  {

      let restMoneyDevAcc = 0;

      let moneyTypeReg = money[i][1];

      while (restMoneyDevAcc < money[i][1]) {
                 
        if (moneyDevol >= values[cashTypes[i]]) {

          moneyTypeReg -= values[cashTypes[i]];;          
                     
          restMoneyDevAcc += values[cashTypes[i]];

          moneyDevol -= values[cashTypes[i]];

          restMoneyDevAcc2 += values[cashTypes[i]];

          moneyDevol = parseFloat(moneyDevol.toFixed(2));
                     
          restMoneyDevAcc2 = parseFloat(restMoneyDevAcc2.toFixed(2));
                     
            if (moneyDevol < values[cashTypes[i]]) {
                       
              break
                     
            }
                   
          }
                 
                 
          console.log("restMoneyDevAcc:", restMoneyDevAcc)
                 
          console.log("moneyDevol", moneyDevol)
                 
          console.log("restMoneyDevAcc2:", restMoneyDevAcc2)
                 
        } //while
              
        (open.change).push([money[i][0], restMoneyDevAcc])
               
        console.log(open)
        
        if (moneyDevol > money[i][1] && money[i][1] != 0) {

          insuf.status = "INSUFFICIENT_FUNDS";
          
          insuf.change = [];
              
          return insuf;

        } else if (moneyDevol2 == money[i][1]) {

          closed.status = "CLOSED";
            
          closed.change = money.reverse();
            
          return closed

        }  else if (restMoneyDevAcc2 == moneyDevol2 && moneyDevol <= values[cashTypes[i]]){
              
          open.status = "OPEN";
              
          return open;

        }

    } //if  (moneyDevol > values[i])

  }// for  (let i =  0; i < cashTypes.length; i++) //for  (let i in values)  {

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));