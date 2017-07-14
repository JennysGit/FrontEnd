/*
 * 多态：
 *  将不变的食物与可能发生改变的食物隔离开来
 */

/*
var makeSound = function(animal) {
    if (animal instanceof Duck) {
        console.log('嘎嘎嘎');
    } else if (animal instanceof Chicken) {
        console.log('咯咯咯');
    }
}

var Duck = function() {};
var Chicken = function() {};

makeSound(new Duck());
makeSound(new Chicken());

*/

/*
 * 以上代码的升级
 */

var makeSound = function(animal) {
    animal.sound();
}

var Duck = function() {

}

Duck.prototype.sound = function() {
    console.log('咯咯咯');
}

var Chicken = function() {};

Chicken.prototype.sound = function() {
    console.log('嘎嘎嘎');
}

var Dog = function(){}

Dog.prototype.sound = function(){
	console.log('汪汪汪');
}

makeSound(new Duck());
makeSound(new Chicken());
makeSound(new Dog());