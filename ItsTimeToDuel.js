class Player {
    constructor(name) {
        this.name = name;
        this.deck = [RedBeltNinja, BlackBeltNinja];
    }
    summon(cardToSummon) {
        console.log(this.name + " summoned " + cardToSummon.name);
        // if you wanna be fancy
        // this.deck.push(new Card(cardToSummon))
        // console.log(this.deck);

    }
    showDeck() {
        console.log(this.deck);
    }
    HardAlgoritm(target) {
        this.cost = this.cost - 2;
        target.resilience = target.resilience + 3;
        console.log(this.name + " used Hard Algorithm");
        console.log("Increase " + target.name + "'s resilence by 3 target's resilience: " + target.resilience);
        return target;
    }
    UnhandledPromiseRejection(target) {
        this.cost = this.cost - 1;
        target.resilience = target.resilience - 2;
        console.log(this.name + " used Undhandled Promise Rejection");
        console.log("Reduced " + target.name + "'s resilence by 2 target's resilience: " + target.resilience);
        return target;
    }
    PairProgramming(target) {
        this.cost = this.cost - 3;
        target.power = target.power + 2;
        console.log(this.name + " used Pair Programming");
        console.log("Increase " + target.name + "'s power by 2 " + target.name + "'s Power:" + target.power);
        return target;
    }
    Attack(attacker, target) {
        target.resilience = target.resilience - attacker.power;
        console.log(attacker.name + " attacked " + target.name + " for " + attacker.power + " " + target.name + " Resilience: " + target.resilience);
        if (target.resilience <= 0) {
            console.log(target.name + " has been destroyed.");
        }
        return attacker;
    }
}

class Card {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
}

RedBeltNinja = new Card("Red Belt Ninja", 3, 3, 4);
BlackBeltNinja = new Card("Black Belt Ninja", 4, 5, 4);

const player1 = new Player("Henry");
const player2 = new Player("Scott")

player1.showDeck();
player1.summon(RedBeltNinja);
player1.HardAlgoritm(RedBeltNinja);
player2.summon(BlackBeltNinja);
player2.UnhandledPromiseRejection(RedBeltNinja);
player1.PairProgramming(RedBeltNinja);
player2.Attack(BlackBeltNinja, RedBeltNinja);
player1.Attack(RedBeltNinja, BlackBeltNinja);

