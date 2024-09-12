let firstAmount = document.getElementById("firstAmount");
let secondAmount = document.getElementById("secondAmount");
// let result = document.getElementById("result")
function add() {
	let addition = parseInt(firstAmount.value) + parseInt(secondAmount.value);
	// document.write(`Result = ${addition}`) = result;
	document.getElementById("result").innerText = `Result = ${addition}`;
}
