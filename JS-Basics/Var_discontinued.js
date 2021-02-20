// https://blog.usejournal.com/awesome-javascript-no-more-var-working-title-999428999994

// It all comes down to Scope
// Before ES6 JS did not have block scope, it only had function scope.
// With function scope, even variables defined in inner braces, as long as
// it was still inside function, it was still in scope, even if it is outside
// the braces (which with block scope, would be it's own scope).

function printMatrix (matrix) {
    for (var i = 0; i < matrix.length; i++) {
      var line = matrix[i];
      for (var i = 0; i < line.length; i++) {
        var element = line[i];
        console.log(element);
      }
    }
  }
  
  var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  printMatrix(matrix);

  console.log(``);

  // So with function scope, this would only output 
  // 1
  // 2
  // 3
  // as var i is not actually redefined, it still points to the same i.

  // In ES6 things were changed to be inline with most programming languages, so JS now has block scope.
  // So behaves as expected, and there are 2 distinct i's in their own scope, and output is as expected

  function printMatrix2 (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      const line = matrix[i];
      for (let i = 0; i < line.length; i++) {
        const element = line[i];
        console.log(element);
      }
    }
  }
  
  const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  printMatrix2(matrix2);

/*
  1
  2
  3
  4
  5
  6
  7
  8
  9
*/

// NOTE: comment to test git auth issues
// NOTE: another comment to fix git auth issue

