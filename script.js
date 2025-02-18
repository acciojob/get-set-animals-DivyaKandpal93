class Animal{
    constructor(species){
this.species = species;
    }
    
    makeSound(){
        return console.log(`The ${this.species} makes a sound`);
    }
}
class Cat extends Animal{
constructor(species){
    super(species);
}
purr(){
return console.log("purr");
}
}
class Dog extends Animal{
constructor(species){
    super(species);
}
bark(){
    return console.log("woof");
}
}

const anm = new Dog("Dog");
anm.makeSound();
anm.bark();
const anm2 = new Cat("Cat");
anm2.makeSound();
anm2.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
