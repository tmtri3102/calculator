let firstAmount = document.getElementById("firstAmount");
let secondAmount = document.getElementById("secondAmount");
let result = document.getElementById("result");
function add() {
	let finalResult = parseInt(firstAmount.value) + parseInt(secondAmount.value);

	result.innerText = `Result = ${finalResult}`;
}
function subtract() {
	let finalResult = parseInt(firstAmount.value) - parseInt(secondAmount.value);

	result.innerText = `Result = ${finalResult}`;
}
function multiply() {
	let finalResult = parseInt(firstAmount.value) * parseInt(secondAmount.value);

	result.innerText = `Result = ${finalResult}`;
}
function divide() {
	let finalResult = parseInt(firstAmount.value) / parseInt(secondAmount.value);

	result.innerText = `Result = ${finalResult}`;
}
