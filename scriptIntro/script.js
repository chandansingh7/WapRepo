
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    var predicate;
    if(Array.isArray(found)) predicate = isEqual(expected,found);
    else predicate = expected === found;
    return predicate ? "TEST SUCCEEDED" : "TEST FAILED.  Expected " + expected + " found " + found;
}
  
  /** Check if arrays are equals */
  const isEqual = (a,b) => 
    a.length == b.length && a.every((variable, incriment) => variable === b[incriment]);

  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);  
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

  /** Checking if the character is a vowel or not and Returning true if it is a vowel else false */
  function isVowel(character){
      const ar = new Array("a","e","i","o","u");
      return ar.includes(character.toLowerCase());
  }
  console.log("Expected out for function isVowel('e') is true " + myFunctionTest(true, isVowel('e')));

  /** sum of all the elements in array and return total */
  function sum(numbers){
      return numbers.reduce((a,b) => a + b);
  }

  console.log("Expected out for function sum([1,2,3,4]) is 10 " + myFunctionTest(10, sum([1,2,3,4])));

  /** multiplication of all the elements in array and return total */
  function multiply(numbers){
    return numbers.reduce((a,b) => a * b);
}
console.log("Expected out for function multiply([1,2,3,4]) is 24 " + myFunctionTest(24, multiply([1,2,3,4])));
/** reverse computes the reversal of a string */

function reverse(string){
 return string.split("").reverse().join("");
}

console.log("Expected out for function reverse([abcd]) is dcba " + myFunctionTest("dcba", reverse("abcd")));

/** findLongestWord takes an array of words and returns the length of the longest one */
function findLongestWord(string){
    return string.reduce((longStr, string)=> {
        return longStr > string.length ? longStr :string.length
    });
}
console.log("Expected out for function findLongestWord(['Expected', 'out', 'for', 'functions']) is 8 " + myFunctionTest(8, findLongestWord(['Expected', 'out', 'for', 'function'])));

/** filterLongWords an takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(strings, i){
    return strings.filter(strings=>strings.length>=i);
}

console.log("Expected out for function findLongestWord(['Expected', 'out', 'for', 'functions'],8) " + 
myFunctionTest(["Expected","function"],filterLongWords(["Expected", "out", "for", "function"], 8)));

/**Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as */
/**const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3); */
const a = [1,3,5,3,3];
console.log(`Orignal Array is ->  ${a}`);
/**multiply each element by 10;  */

var times10 = a.map(data => data *10)
console.log(`Orignal Array Multiply by 10 -> ${times10} ${myFunctionTest([10, 30, 50, 30, 30], times10)}`);

/**return array with all elements equal to 3; */
var allas3 = a.map(a => a=3);
console.log(`Mpping all element with 3 -> [${allas3}] ${myFunctionTest([3, 3, 3, 3, 3], allas3)}`);

/**return array with only elements equal to 3; */
var filteras3 = a.filter(a => a==3);
console.log(`Mpping element with 3 -> [${filteras3}] ${myFunctionTest([3, 3, 3], filteras3)}`);

/**return the product of all elements; */
console.log(`multiplication of all elements is ->${multiply(a)} ${myFunctionTest(135,multiply(a))}`);
