var arr = [1, 2, 3];

// 
console.log(arr.map(v => v * 2));

// 
var bob = {
    _name: 'Bob',
    _friends: ["Jenny"],
    printFriend() {
        this._friends.forEach(f => {
            console.log(this._name + ' knows ' + f);
        });
    },
    printFriendES5: function() {
        this._friends.forEach(function(f) {
            // this._name is undifend in ES5.
            // anonymous function default scope is window.
            console.log(this._name + ' knows ' + f);
        });
    }
}

// arguments 对象
function square() {
    let example = () => {
        let numbers = [];
        // let ... of ..
        for (let number of arguments) {
            numbers.push(number * number);
        }
        return numbers;
    }
}