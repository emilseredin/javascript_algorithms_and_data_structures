function palindrome(str) {
  return isPalindrome(stripString(str));
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  
  let first = 0;
  let last = str.length - 1;
  if (str[first] !== str[last]) {
    return false;
  } else {
    return isPalindrome(str.slice(first + 1, last));
  }
}

function stripString(str) {
  str = str.toLowerCase();
  let result = "";
  let regex = /[a-z0-9]/g;
  let array = [...str.matchAll(regex)];
  array.forEach((elem) => {
    result += elem[0];
  });

  return result;
}

palindrome("eye");
