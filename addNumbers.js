var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(currentSum, numLeft, completionCallback) {
  if (numLeft > 0) {

    reader.question("enter number:", function (enteredNumber) {
      var updatedSum = currentSum + parseInt(enteredNumber);
      completionCallback(updatedSum);
      addNumbers(updatedSum, numLeft - 1, completionCallback);
    });

  } else {
    reader.close();
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
