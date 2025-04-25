# 1. Which exercise did you enjoy the most? Why?
I enjoyed exercise 1,2,3,5 except exercise I needed help to do it

# 2. Which JavaScript method or approach did you use for each task?
What method or approach did you use for each task?
At the beginning for the first task I used a fontion to inverted a string of character, then the second task I applied a function to display the maximum number insert, After for the third dot function that displays the number of vowels in a word either miniscule or majúsculo, then for the last before dot I used the function that converts the string into lowercase to ignore the case.
Finally for the final task it was a function that displays the sum of even numbers that are entering in a space. 

# 3. Can you improve any of your solutions to be shorter or cleaner?
Ex1 :
const reverseString = str => [...str].reverse().join('');
console.log(reverseString("bonjour")); // Output: "ruojnob"

Ex2 :
const findLargestNumber = arr => Math.max(...arr);
console.log(findLargestNumber([5, 22, 1, 99, 34])); // Output: 99

Ex3 :
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log(countVowels("Salut tout le monde")); // Output: 7

Ex4 :
const isPalindrome = str => {
  const cleaned = str.toLowerCase();
  const isPal = cleaned === [...cleaned].reverse().join('');
  console.log(isPal ? "C'est un palindrome !" : "Ce n'est pas un palindrome.");
};

Ex5 :
const sumEvenNumbers = numbers => {
  const sum = numbers.reduce((acc, n) => n % 2 === 0 ? acc + n : acc, 0);
  console.log("Somme des nombres pairs:", sum);
};
