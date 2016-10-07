/**
 * Created by siqi on 9/24/16.
 */

//Given this empty array, perform the following tasks

   var arr1=[];
// var arr1 = ['1','11','15','20','22','30','33','50','70','80'];

console.log("arr", arr1);
for (var i=0; i<10; i++){
    var number = Math.random() * 100;
    console.log(i, number);
    var roundedNumber = Math.round(number);
    console.log(i, roundedNumber);
    arr1.push(roundedNumber);
    console.log(i, arr1);
}


console.log('arr1 before: ' + arr1);
    var shifted = arr1.shift();
    console.log('arr1 after: ' + arr1);
    console.log('removed this element: ' + shifted);


var popped = arr1.pop();

var arr2 = [];
for (var i=0; i<arr1.length; i++) {
    arr2.unshift(arr1[i])
    console.log(arr2);
}

//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?








//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

// console.log('arr1 before: ' + arr1);
//     var shifted = arr1.shift();
//     console.log.('arr1 after: ' + arr1);
//     console.log('Removed this element: ' + shifted);
//
//
//
//
//
// console.log(arr1);
//     var popped = arr1.pop();
//     console.log(popped);

//arr1 has 99 elements at this moment


var arr2= [];



//Task 1: populate the empty array with 10 random, *rounded*, numbers between 0 and 100
//Hint: within a 'for' loop, use 'Math.random() * 100' and 'Math.round()'


//Task 2: remove the first element in the array and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift


//Task 3: remove the last element in the array, and log it in console
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop


//Question: how many elements does arr1 have at this moment?


//Task 4: given a new empty array arr2, populate it with the exact same values as in arr1
//...but in reverse order
//Hint: use the '.unshift()' method of array. Can you look up the API for it?
var arr2 = [];


//Task 5 OPTIONAL: filter out all the odd values in arr1, keeping the even values
//Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var arr3 = arr1.filter(function(el){
    //your code here
});
console.log(arr3);