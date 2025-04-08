// Calculator Program
class Calculator {
    // Add two numbers
    add(a, b) {
        return a + b;
    }

    // Subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Divide two numbers
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Main function to interact with the calculator
function main() {
    const calculator = new Calculator();
    const prompt = require("prompt-sync")();

    console.log("Welcome to the Calculator!");
    console.log("Available operations: add, subtract, multiply, divide");

    while (true) {
        console.log("\nEnter 'exit' to quit.");
        const operation = prompt("Enter operation: ").toLowerCase();

        if (operation === "exit") {
            console.log("Goodbye!");
            break;
        }

        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));

        try {
            let result;
            switch (operation) {
                case "add":
                    result = calculator.add(num1, num2);
                    break;
                case "subtract":
                    result = calculator.subtract(num1, num2);
                    break;
                case "multiply":
                    result = calculator.multiply(num1, num2);
                    break;
                case "divide":
                    result = calculator.divide(num1, num2);
                    break;
                default:
                    console.log("Invalid operation. Please try again.");
                    continue;
            }
            console.log(`Result: ${result}`);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
}

// Run the program
main();