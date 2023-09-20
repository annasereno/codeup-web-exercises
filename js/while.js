// let num = 1;
// while(num < 65536){
// 	num*=2;
// 	console.log(num);
// }

let totalCones = getRandomInt(50, 100);

let wantToBuy

do{
	wantToBuy = getRandomInt(1, 5);

	if(wantToBuy <= totalCones){
		console.log(`a customer buys ${wantToBuy} cones.`)
		totalCones -= wantToBuy;
	} else {
		console.log(`A customer tries to buy ${wantToBuy} cones but you only have ${totalCones} left`)
	}
	console.log(`You now have ${totalCones} cones remaining.`)
	if(totalCones === 0) {
		console.log(`You sold all your cones! You can go home now.`)
	}
}while(totalCones > 0)