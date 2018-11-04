// Created arr for random words
var mysteriesWords = [
    'pear', 'monkey','football','space','cream'
];

// Algorithm for random word
var randomWord = mysteriesWords[Math.floor(Math.random() * mysteriesWords.length)];

// Length of word equal each substring position on massive's Answer
var answerArray = [];
for (var i = 0; i < randomWord; i++) {
    answerArray[i] = '_';
}
// Counter
var remainingLetters = randomWord.length;

// Statement of our Tyburn tree
while (remainingLetters > 0) {
    alert(answerArray.join('_'));
    var guess = prompt("Guess the letter");

    if (guess == null) {
        alert('You left the game');
        break;
    } else if (guess.length !== 1) {
        alert('Please type only one letter')
    } else {
        for (var j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--
                /*
                if letter's random word equal our letter of user,
                we will add letter into our array, and reduce our counter!
                 */
            }
        }
    }
}
alert('Super you guessed all letters! it\'s\' ' + randomWord);






















