// HEROS AND MAGES

function main() {
	return {
		mage: function (name) {
			return {
				name: name,
				mana: 100,
				health: 100,
				cast: function (spell) {
					// spell is the parameter that becomes argument
					this.mana--;
					console.log(`${this.name} cast ${spell}`);
				},
			};
		},
		fighter: function (name) {
			return {
				name: name,
				stamina: 100,
				health: 100,
				fight: function (toAttack) {
					this.stamina--;
					console.log(`${this.name} slashes at the foe!`);
					toAttack.health;
				},
			};
		},
	};
}

let create = main(); // main() === solve()
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball"); // has argument of "fireball"
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Fighter 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
