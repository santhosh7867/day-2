function evalNumbers(num1, num2, operation) {
    let solution
    if (operation === "add") {
      solution = num1 + num2;
    } else if (operation === "subtract") {
      solution = num1 - num2;
    } else if (operation === "multiply") {
      solution = num1 * num2;
    } else if (operation === "divide") {
      if (num2 !== 0) {
      solution = num1 / num2;
      } else {
      solution = "Division by zero is not allowed";
      }
    } else if (operation === "modulus") {
      if (num2 !== 0) {
        solution = num1 % num2;
      } else {
        solution = "Modulus by zero is not allowed";
      }
    } else {
      solution = "Invalid operation";
    }
    console.log(solution);
  }
  evalNumbers(10, 5, "add");       
  evalNumbers(10, 5, "subtract");  
  evalNumbers(10, 5, "multiply"); 
  evalNumbers(10, 5, "divide");    
  evalNumbers(10, 5, "modulus");   
  evalNumbers(10, 0, "divide");    
  evalNumbers(10, 0, "modulus"); 