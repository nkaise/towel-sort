
// You should implement your task here.

// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newMatrix = [];
  var nullMatrix = [];
  if (matrix == undefined) {
    return nullMatrix
  }
    for (let i = 0; i < matrix.length; i ++) {
      if (i % 2 == 0) {
        newMatrix.push(matrix[i])
      }
      else {
        var reverseMatrix = matrix[i];
        reverseMatrix.reverse();
        newMatrix.push(reverseMatrix);
      }
    }
  return newMatrix.flat(Infinity)
}
