function convertToRoman(num) {
    let result = "";
    let splitNums = separateNum(num);
    let romanNums = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };

    // conversion happens here
    splitNums.forEach((num) => {
       if (romanNums[num]) {
           result += romanNums[num];
       } 
       else {
           let temp = "";
           let keys = Object.keys(romanNums);
           let keepGoing = true;
           while (keepGoing) {
               if (num <= 0) {
                   keepGoing = false;
               } else if (num > 1000) {
                   let times = Math.floor(num / 1000);
                   for (let i = 0; i < times; i++) {
                       temp += romanNums[1000];
                   }
                   num -= (times * 1000);
               } else {
                   for (let i = keys.length - 2; i >= 0; i--) {
                       let currentKey = keys[i];
                       if (currentKey <= num) {
                           temp += romanNums[currentKey];
                           num -= currentKey;
                           break;
                       }
                   }
               }
           }
           result += temp;
        }
    });

    return result;
}

function separateNum(num) {
    let nums = [];
    let power = 0;
    let base = 10;
    while (num > 0) {
        let digit = num % base;
        nums.unshift(digit * Math.pow(base, power));
        power += 1;
        num = Math.floor(num / base);
    }

    return nums;
}

convertToRoman(36);
