let costOfApples= 10;
let costOfBanana =15;
let costOfMangoes =8;
let noOfApples;
let noOfBananas;
let noOfMangoes;


function totalCost() {
	noOfApples = parseInt(document.querySelector("#apples").value);
	noOfBananas = parseInt(document.querySelector("#bananas").value);
	noOfMangoes = parseInt(document.querySelector("#mangoes").value);
	
	let totalCost = noOfApples*costOfApples + noOfBananas*costOfBanana + noOfMangoes*costOfMangoes;
	let paragraph = document.querySelector("p");
	paragraph.innerHTML = "Total Cost is " + totalCost;
}







