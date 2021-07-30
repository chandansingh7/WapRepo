
describe("filter", function () {
    it("After Overriding Sring method filter, This method that takes an array of string as an arguments, and returns string without thoses filter string inputs",
        function () {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
});

describe("bubbleSort", function () {
    it("After Overriding Array method bubbleSort, This method returns the array sorted using bubble sort algorith",
        function () {
            assert.equal([10,6,3,7,1,4,5,2,9,8].bubbleSort().toString(),  [1,2,3,4,5,6,7,8,9,10].toString());
        });
});

describe("teach", function () {
    it("Teacher method take a subject as a string and returns the teacher name along with he's subject name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("Chandan", 27);
            assert.equal(teacher.teach("Inheritance"),  `${teacher.name} is now teaching Inheritance`);
        });
});