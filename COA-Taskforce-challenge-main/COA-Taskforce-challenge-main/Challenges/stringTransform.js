function transformString(str) {
  const reversedStr = str.split("").reverse().join("");
  const asciiCodes = [];

  for (let char of str) {
    asciiCodes.push(char.charCodeAt(0));
  }

  if (str.length % 3 === 0 && str.length % 5 === 0) {
    return reversedStr
      .split("")
      .map((char) => asciiCodes[reversedStr.indexOf(char)])
      .join(" ");
  } else if (str.length % 3 === 0) {
    return reversedStr;
  } else if (str.length % 5 === 0) {
    return asciiCodes.join(" ");
  } else {
    return str;
  }
}

// Example to test
const inputString = "Hello World";
const transformedString = transformString(inputString);

console.log(transformedString);
