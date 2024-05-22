function checkCashRegister(price, cash, cid)  {

    let money = cid;
  
    function ObjRet() {
  
      this.status = "",
  
      this.change = []
  
    }
  
    let insuf = new ObjRet();
  
    let closed = new ObjRet();
    
    let open = new ObjRet();
    
    let moneyDevol = cash - price; //96.74
  
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
  
    let cashTypes =  Object.keys(values).reverse();
  
    for  (let i in values)  {
  
      if  (moneyDevol > values[i])  {
        //console.log(cashTypes)
        for  (let k =  0; k < cashTypes.length; k++)  {
  
  
          if  (cashTypes[k] == i)  {
  
            //console.log("k:", k);
            //console.log("money[k][1]:", money[k][1]);
            //console.log("values[i]:", values[i]);
            let restMoneyDevAcc = 0;
  
            //if (moneyDevol > values[i]) {
  
              //if (money[k][1] > 0) {
  
                 while (moneyDevol >= values[i] && money[k][1] > 0) {//restMoneyDevAcc != money[k][1]) {
                   if (money[k][1] > 0) {
  
                     if (moneyDevol >= values[i]) {
   
                       money[k][1] = money[k][1] - values[i];          
                       restMoneyDevAcc += values[i];
  
                       moneyDevol -= values[i];
  
                       moneyDevol = parseFloat(moneyDevol.toFixed(2));
                     
                     }
                   }
                   
                   console.log("restMoneyDevAcc:", restMoneyDevAcc)
                   //console.log("money[k][1]:", money[k][1])
                   console.log("moneyDevol", moneyDevol)
                   
                 } //while
                
                 (open.change).push([money[k][0], restMoneyDevAcc])
                 open.status = "OPEN";
                 
                 //restMoneyDevAcc = 0;
                 //k--;
  
                 //moneyDevol -= restMoneyDevAcc
                //  if (restMoneyDevAcc == moneyDevol && moneyDevol < 1) {
                //    (open.change).push([money[k][0], restMoneyDevAcc]) //= money[k].slice()
                //  } else {
                //    (open.change).push([money[k][0], restMoneyDevAcc])
                //  }
                 //console.log(open)
               //} //else {
              //    while (moneyDevol > money[k][1]) {
              //      k--
              //      if (k == 0){
              //        break
              //      }
              //    }
              // }
           // }  
            if (moneyDevol > money[k][1]) {
  
              //let rest = moneyDevol - money[k][1];
              if (k == 0) {
  
                insuf.status = "INSUFFICIENT_FUNDS";
                insuf.change = [];
                return insuf;
  
               } //else {
              //   money[k][1] = money[k][1] - moneyDevol;
              //   open.status = "OPEN";
              //   open.change = [[money[k][0], moneyDevol]];
              //   return open;
              // }
              
  
            } else if (moneyDevol == money[k][1]) {
  
              closed.status = "CLOSED";
              closed.change = money;
              return closed
  
            }  else {//(moneyDevol < money[k][1] && moneyDevol < values[i]) 
              
              // money[k][1] = money[k][1] - moneyDevol;
              //open.status = "OPEN";
              // open.change = [[money[k][0], moneyDevol]];
               return open;
  
            }
  
          }
  
        }
  
        //return i//change / values[i]
  
        //return values[i]
  
      }
  
    }
  
    // for (let i = values.length-1; i > 0; i--) {
  
      // return values[i];
  
    // }
  
    //return cashTypes;
  
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));