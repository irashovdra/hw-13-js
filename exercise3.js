function findLongestWord(string) {
  let array = string.split(" ");
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < array.length; i += 1) {
    wordLength = array[1].length;

    if (array[i].length > wordLength) {
      longestWord = array[i];

      return longestWord;
    }
  }
}

console.log(findLongestWord("I am studying JavaScript"));
