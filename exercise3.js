function findLongestWord(string) {
  let array = string.split(" ");
  console.log(array);
  let longestWord = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("I am studying JavaScript"));
