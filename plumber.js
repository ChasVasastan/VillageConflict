import { Villager } from './villager.js';
export class Plumber extends Villager {
    constructor() {
        super();
        this.strength = 35;
        this.intellect = 35;
        this.stamina = 20;
        this.agility = 10;
    }
}
