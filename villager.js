import {diceRoll} from './script.js'

export class Villager {
    constructor() {
        this.strength = 20;
        this.intellect = 20;
        this.stamina = 20;
        this.agility = 40;
    }


    flee() {
        let result = this.agility + diceRoll();
        return result;
    }

    fight() {
        let result = ((this.intellect + this.strength)/2) + diceRoll();
        return result;
    }

    repair() {
        let result = ((this.stamina + this.intellect)/2) + diceRoll();
        return result;
    }

    barter() {
        let result = this.intellect + diceRoll();
        return result;
    }
}
