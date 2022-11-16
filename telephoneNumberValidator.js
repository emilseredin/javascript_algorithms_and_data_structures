function telephoneCheck(str) {
  let regs = [
    /^(1\s)?[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
    /^(1\s)?\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}$/,
    /^[0-9]{3}\s?[0-9]{3}\s?[0-9]{4}$/,
    /^1(\s[0-9]{3}\s|\([0-9]{3}\)|\s\([0-9]{3}\)\s)[0-9]{3}\s[0-9]{4}$/,
    /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/
  ];
  let matched = false;
  for (let i = 0; i < regs.length; i++) {
    matched = regs[i].test(str);
    if (matched) {
      break;
    }
  }

  return matched;
}

telephoneCheck("555-555-5555");
