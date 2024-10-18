import { Villager } from './villager.js';
export class Client  extends Villager{
    constructor() {
        super();
        this.strength = 10;
        this.intellect = 40;
        this.stamina = 10;
        this.agility = 40;
    }
}
