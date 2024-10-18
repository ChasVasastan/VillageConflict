import { Villager } from './villager.js';
export class Carpenter extends Villager {
    constructor() {
        super();
        this.strength = 40;
        this.intellect = 30;
        this.stamina = 20;
        this.agility = 10;
    }
}
