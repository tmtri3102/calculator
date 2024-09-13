let firstAmount = document.getElementById("firstAmount");
let secondAmount = document.getElementById("secondAmount"); // nếu chấm .value sẽ mặc định = 0 -> chạy function =0 vì mt load từ trên xuống
let result = document.getElementById("result");
// Cách 1: Từng function
// function add() {
// 	let finalResult = parseInt(firstAmount.value) + parseInt(secondAmount.value);

// 	result.innerText = `Result = ${finalResult}`;
// }
// function subtract() {
// 	let finalResult = parseInt(firstAmount.value) - parseInt(secondAmount.value);

// 	result.innerText = `Result = ${finalResult}`;
// }
// function multiply() {
// 	let finalResult = parseInt(firstAmount.value) * parseInt(secondAmount.value);

// 	result.innerText = `Result = ${finalResult}`;
// }
// function divide() {
// 	let finalResult = parseInt(firstAmount.value) / parseInt(secondAmount.value);

// 	result.innerText = `Result = ${finalResult}`;
// }
// Cách 2: Switch case
function calculate(operator) {
	const a = parseFloat(firstAmount.value);
	const b = parseFloat(secondAmount.value);
	let finalResult;

	switch (operator) {
		case "+":
			finalResult = a + b;
			break;
		case "-":
			finalResult = a - b;
			break;
		case "*":
			finalResult = a * b;
			break;
		case "/":
			finalResult = a / b;
			break;
	}
	result.innerText = `Result = ${finalResult}`;
}

let display = document.getElementById("result2");

function appendNumber(number) {
	event.preventDefault();
	if (display.value === "0" || display.value === "Error") {
		display.value = number;
	} else {
		display.value += number;
	}
	console.log(display.value);
}
function appendOperator(operator) {
	event.preventDefault();
	try {
		// Evaluate the current expression in the display
		const result = eval(display.value);
		display.value = result + operator; // Display the result followed by the operator
	} catch (error) {
		display.value = "Error"; // Handle any errors
	}
}
