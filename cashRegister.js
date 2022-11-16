function checkCashRegister(price, cash, cid) {
  if (cid.reduce((acc, next) => {
      return acc + next[1];
    }, 0) == cash - price) {
    return {status: 'CLOSED', change: cid};
  }
  let d = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = [];
  let toGive = cash - price;
  let status;
  for (let i = cid.length - 1; i >= 0; i--) {
    if (toGive == 0) {
      break;
    } else if (toGive >= d[i]) {
      if (toGive >= cid[i][1]) {
        change.push(cid[i]);
        toGive -= cid[i][1];
      } else {
        let divRes = Math.floor(toGive / d[i]);
        change.push([cid[i][0], d[i] * divRes]);
        toGive -= (d[i] * divRes);
        toGive = toGive.toFixed(2);
      }
    } else {
      continue;
    }
  }
  if (toGive > 0) {
    return {status: 'INSUFFICIENT_FUNDS', change: []};
  } else {
    return {status: 'OPEN', change};
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
