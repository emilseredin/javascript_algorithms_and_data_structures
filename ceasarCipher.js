function rot13(str) {
    let boundary = "M".charCodeAt(0);
    let cipheredString = "";
    str.split("").forEach(char => {
        if (isAlpha(char)) {
            let charCode = char.charCodeAt(0); 
            if (charCode <= boundary) {
                cipheredString += String.fromCharCode(charCode + 13);
            } else {
                cipheredString += String.fromCharCode(charCode - 13);
            }
        } else {
            cipheredString += char;
        }
    });

    return cipheredString;
}
  
function isAlpha(char) {
    return /[a-zA-Z]/.test(char);
}

rot13("SERR PBQR PNZC");
