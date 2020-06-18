// function longestString() {
//   var longest = '';
//   for (var i=0; i < arguments.length; i++) {
//     if (arguments[i].length > longest.length) {
//       longest = arguments[i];
//     }
//   }
//   console.log(longest);
// }
// longestString('háhah','aaaaaaaaaaaaaaaaaaaaa','kiuebnad');

// class Fire {
// 	constructor(name,hp,dame,armor){
// 		this.name = name;
// 		this.hp = hp;
// 		this.dame = dame;
// 		this.armor = armor;
// 	}
// 	attack(dame){
// 		this.hp -= dame;
// 	}
// 	downAttack(armor){
// 		this.hp += armor;
// 	}
// 	damege(enemy){
		
// 		enemy.attack(this.dame);
// 	}
// }
// class rangeFire extends Fire{
// 	constructor(name , hp , dame ,armor, range){
// 		super(name,hp,dame,armor);
// 		this.range = range;
// 	}
// 	attack(dame){
// 		this.hp -= dame;
// 	}
// 	downAttack(armor){
// 		this.hp += armor;
// 	}
// 	damege(enemy){
// 		if(this.range >10){
// 			this.dame += this.dame;
// 		}
// 		enemy.downAttack(enemy.armor);
// 		enemy.attack(this.dame);
// 	}
// }
// const Blame = new rangeFire('ChanDoi',100,13,1,9);
// const Shuriken = new Fire('ZoLaZiet',100,8,10);
// console.log(Blame);
// console.log(Shuriken);
// Blame.damege(Shuriken);
// console.log(Blame);
// console.log(Shuriken);
var a1 = 1;
var obj = {'a':  4};
console.log(obj);
function change(x){
	x.a = 5;
	console.log(x);
}
change(obj);
console.log(obj);