var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(currentSum, numLeft, completionCallback) {
  if (numLeft > 0) {

    reader.question("enter number:", function (enteredNumber) {
      var updatedSum = currentSum + parseInt(enteredNumber);
      addNumbers(updatedSum, numLeft - 1, completionCallback);
    });

  } else {
    completionCallback(currentSum);
    reader.close();
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
