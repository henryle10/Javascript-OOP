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
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();