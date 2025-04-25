//Exercise 1 : function that takes a string and returns it reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("bonjour")); // Output :"ruojnob"

  //Exercise 2 : Find the Maximum Number
  function findLargestNumber(arr) {
    return Math.max(...arr);
  }
  console.log(findLargestNumber([5, 22, 1, 99, 34])); // Output: 99

  //Exercice 3 : Count Vowels in a String
  function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    
    return count;
  }  
  console.log(countVowels("Salut tout le monde")); // Output: 7

  //Exercise 4 : Check for Palindrome
  function isPalindrome(str) {
    // Convertir la chaîne en minuscules pour ignorer la casse
    str = str.toLowerCase();
  
    // Boucle pour comparer le début et la fin de la chaîne
    for (let i = 0; i < str.length / 2; i++) {
      // Si le caractère au début ne correspond pas au caractère à la fin, ce n'est pas un palindrome
      if (str[i] !== str[str.length - 1 - i]) {
        console.log("Ce n'est pas un palindrome.");
        return; // Arrêter la fonction si ce n'est pas un palindrome
      }
    }
  
    // Si la boucle passe sans erreurs, c'est un palindrome
    console.log("C'est un palindrome !");
  }

  // Exercise 5 : Sum of Even Numbers
  function sumEvenNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
  
    console.log("Somme des nombres pairs:", sum);
  }
  