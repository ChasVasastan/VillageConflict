export class Villager {
    constructor() {
        this.strength = 20;
        this.intellect = 20;
        this.stamina = 20;
        this.agility = 40;
    }


    flee() {
        let resultat = this.agility + successRate();
    }

    defend() {
        let resultat = ((this.intellect + this.strength)/2) + successRate();
    }

    repair() {
        let resultat = ((this.stamina + this.intellect)/2) + successRate();

    }
}
