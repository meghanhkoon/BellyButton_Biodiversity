//return an array of numbers larger than 1
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;

});

console.log(larger);

// return animals who start with the letter "s"
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var wordsS = words.filter(function(word){
    return word[0]="s";
});

