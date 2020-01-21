function Fighter(myFighter) {
    let myFighterName = myFighter.name;
    let damage = myFighter.damage;
    let strength = myFighter.strength;
    let agility = myFighter.agility;
    let hp = myFighter.hp;
    let totalHp = hp;
    myFighter.win = 0;
    myFighter.loss = 0;

    return {
        getName: () => myFighterName,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => hp,
        setHealth: (health) => {
            hp = health;
        },
        addWin: () => ++myFighter.win,
        addLoss: () => ++myFighter.loss,
        attack: (defender) => {
            let maxProbability = 100;
            let ag = defender.getAgility();
            let st = defender.getStrength();
            let accuracy = maxProbability - (ag + st);
            let probability = Math.floor(Math.random() * maxProbability);

            if (accuracy < probability) {
                console.log(`${myFighter.name} attack missed`);
            } else {
                let setHP = defender.getHealth() - damage;
                if (setHP < 0) {
                    defender.setHealth(0);
                } else {
                    defender.setHealth(setHP);
                }
                console.log(`${myFighter.name} makes ${myFighter.damage} damage to ${defender.getName()}`);
            }
        },
        heal: (points) => {
            points + hp > totalHp ? hp = totalHp : hp += points;
        },
        dealDamage: (p) => {
            hp - p < 0 ? hp = 0 : hp -= p;
        },
        logCombatHistory: () => {
            console.log(`Name: ${myFighterName}, Wins: ${myFighter.win}, Losses: ${myFighter.loss}`);
        }
    }
}

function battle(myFighter1, myFighter2) {
    if (myFighter1.getHealth() === 0 || myFighter2.getHealth() === 0) {
        return console.log(`One of your fighters is dead and can't fight.`);
    }
    while (myFighter1.getHealth() >= 0 && myFighter2.getHealth() >= 0) {
        if (myFighter1.getHealth() === 0) {
            myFighter1.addLoss();
            myFighter2.addWin();
            console.log(`${myFighter1.getName()} is dead and can't fight`);
            break;
        }
        myFighter1.attack(myFighter2);
        if (myFighter2.getHealth() <= 0) {
            myFighter2.addLoss();
            myFighter1.addWin();
            console.log(`${myFighter2.getName()} is dead and can't fight`);
            break;
        }
        myFighter2.attack(myFighter1);
    }
}

const fighter1 = new Fighter({
    name: 'Maximus',
    damage: 20,
    strength: 20,
    agility: 15,
    hp: 100,
});
const fighter2 = new Fighter({
    name: 'Commodus',
    damage: 25,
    trength: 25,
    agility: 20,
    hp: 90,
});

battle(fighter1, fighter2);
