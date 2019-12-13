const urlEncode = function(text) {
  // Put your solution here
  
  let trimText = text.trim();
  let splitText = trimText.split(' ');
  let encodedText = splitText.join('%20');

  // let spaceIndex = [];

  // for (i = 0; i < trimText.length; i++) {
  //   if (trimText[i] === " ") {
  //     trimText[i] = "%20";
  //     // spaceIndex.push(i);    
  //   }
  //   console.log(trimText);
  // }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));