// map() function
var numbers = [1,2,3,4,5];

var doubled = numbers.map(function(num){
    return num * 2;
});

console.log(doubled);

// map() to add 5 to each number in the array 
var numbers = [0,2,4,6,8];

var addFive = numbers.map(function(num){
    return num + 5;
});

console.log(addFive);