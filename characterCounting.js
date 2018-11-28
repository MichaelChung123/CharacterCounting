function countLetters(string) {
  var strArray = string.split("");
  var letterObject = {};

  for(var x of strArray) {
    if(x != " ") {
      if(!letterObject[x]) {
        letterObject[x] = 1;
      } else {
        letterObject[x]++;
      }
    }
  }

  return letterObject;
}

console.log(countLetters("lighthouse in the house"));