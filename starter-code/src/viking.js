// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;   
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) return `${this.name} has died in act of combat`
        return `${this.name} has received ${damage} points of damage`
    }

    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) return `A Saxon has died in combat`
        return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let saxonRandomNo = Math.floor(Math.random() * this.saxonArmy.length)
        let attackVictim = this.saxonArmy[saxonRandomNo];
        let attackPerpetrator = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        
        attackVictim.receiveDamage(attackPerpetrator.strength)

        if (attackVictim.health <= 0) {
            this.saxonArmy.splice(saxonRandomNo, 1)
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${attackPerpetrator.strength} points of damage`
        }
    }

    saxonAttack() {
        let vikingRandomNo = Math.floor(Math.random() * this.vikingArmy.length)
        let attackVictim = this.vikingArmy[vikingRandomNo];
        let attackPerpetrator = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        
        attackVictim.receiveDamage(attackPerpetrator.strength)

        if (attackVictim.health <= 0) {
            this.vikingArmy.splice(vikingRandomNo, 1)
            return `${attackVictim.name} has died in act of combat`
        } else {
            return `${attackVictim.name} has received ${attackPerpetrator.strength} points of damage`
        }
    }

    showStatus() {
        if (!this.saxonArmy.length) return `Vikings have won the war of the century!`
        else if (!this.vikingArmy.length) return `Saxons have fought for their lives and survive another day...`
        else return `Vikings and Saxons are still in the thick of battle.`
    }
}

