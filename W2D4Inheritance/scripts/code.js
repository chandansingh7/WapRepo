String.prototype.filter = filter;
function filter(...bannedWords) {
    return this.toString().replace(new RegExp(bannedWords.join("|"), "gi"),'').replace(/\s+/g,' ').trim();
}


Array.prototype.bubbleSort = bubbleSort;
function bubbleSort() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
};

Person = function() {};
Person.prototype.initialize = function(name, age) {
 this.name = name;
 this.age = age;
};

Person.prototype.describe = function() {
 return this.name + ", " + this.age + " years old.";
};

Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return `${this.name} is now teaching ${subject}`;
}


