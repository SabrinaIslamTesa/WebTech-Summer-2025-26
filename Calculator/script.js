const display = document.getElementById('display');

// 1. Add clicked value to the display exactly as typed
function sendValue(value) {
    display.value += value;
}

// 2. Clear the display
function clearDisplay() {
    display.value = '';
}

// 3. Manually calculate or show Error
function calculate() {
    let expression = display.value;

    if (!expression) return;

    // Check if there are two or more operators side by side (e.g., ++, -+, *-)
    // Or if the expression starts or ends with an operator
    let invalidPattern = /[\+\-\*\/]{2,}/; 
    let startsWithOp = /^[\+\-\*\/]/;
    let endsWithOp = /[\+\-\*\/]$/;

    if (invalidPattern.test(expression) || startsWithOp.test(expression) || endsWithOp.test(expression)) {
        display.value = 'Error';
        return;
    }

    // If it passes the check, we do a clean manual calculation
    try {
        // Separate numbers: "65+9" becomes ["65", "9"]
        let numbers = expression.split(/[\+\-\*\/]/).map(Number);
        
        // Separate operators: "65+9" becomes ["+"]
        let operators = expression.replace(/[0-9.]/g, '').split('');

        let total = numbers[0];

        // Loop through and calculate step-by-step
        for (let i = 0; i < operators.length; i++) {
            let nextNumber = numbers[i + 1];
            let op = operators[i];

            if (op === '+') {
                total += nextNumber;
            } else if (op === '-') {
                total -= nextNumber;
            } else if (op === '*') {
                total *= nextNumber;
            } else if (op === '/') {
                if (nextNumber === 0) {
                    display.value = "Can't divide by 0";
                    return;
                }
                total /= nextNumber;
            }
        }

        // Show the final manual result
        display.value = total;

    } catch (error) {
        display.value = 'Error';
    }
}