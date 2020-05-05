class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log('Name: ' + this.name + ' Health: ' + this.health + ' Speed: ' + this.speed + ' Strength: ' + this.strength);
    }
    drinkSake() {
        this.health = this.health + 10;
        console.log(this.name + ' just drank sake and gained +10 health' + ' Health: ' + this.health);
    }
}
class Sensei extends Ninja {
    constructor(name, health) {
        super(name = name, health = 200);
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const ninja1 = new Ninja("Hyabusa", 100);
const sensei1 = new Sensei("Henry");
sensei1.drinkSake();
sensei1.speakWisdom();
sensei1.showStats();
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();