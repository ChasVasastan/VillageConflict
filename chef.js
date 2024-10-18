import { Villager } from './villager.js';
export class Chef extends Villager {
    constructor() {
        super();
        this.strength = 40;
        this.intellect = 10;
        this.stamina = 30;
        this.agility = 20;
    }
}
