describe("max", function () {
    it("Max returns the maximum of 2 arguments",
        function () {
            assert.equal(20, max(10, 20));
        });
});

describe("maxOfThreeax", function () {
    it("Max3 takes 3 numbers as arguments and returns the largest",
        function () {
            assert.equal(50, maxOfThree(10, 20, 50));
        });
});

describe("isVowel", function () {
    describe("Checking if the character is a vowel or not and Returning true if it is a vowel else false", function () {
        it("returns true",
            function() {
                assert.equal(true, isVowel('a'));
        });
    });
});

describe("sum", function () {
    describe("When we will give an array of more than one numbers it will", function() {
        it("Sum of all the elements in array and return total",
            function () {
                assert.equal(24, sum([2, 4, 6, 12]));
            });
    });
});

describe("multiply", function () {
    describe("When we will give an array of more than one numbers it will", function() {
        it("Multiplication of all the elements in array and return total",
            function () {
                assert.equal(48, multiply([2, 4, 6]));
            });
        });
});

describe("reverse", function () {
    it("Takes a string, and returns the reverse",
        function () {
            assert.equal("hgnis", reverse("singh"));
        });
});

describe("filterLongWords", function () {
    it("FilterLongWords an takes an array of words and an integer i and returns the array of words that are longer than i",
        function () {
            assert.equal("functions", filterLongWords(["Expected", "out", "for", "functions"], 9));
        });
});
