// @TODO include your math operation modules

/**
 * Function for calculating simple math operations
 * operation : A single character for specifying the type of operations to perform
 * lhs : Value on the left hand side of the equation/operator
 * rhs : Value on the right hand side of the equation/operator
 */
function calculate(operation, {lhs, rhs}) {
  let result = undefined;
  switch(operation) {
    case 'A':
    case 'a':
      result = lhs+rhs;
      break;
    case 'S':
    case 's':
      result = lhs-rhs;
      break;
    case 'M':
    case 'm':
      result = lhs*rhs;
      break;
    case 'D':
    case 'd':
      result = lhs/rhs;
      break;
    default:
      result = 'Unknown operation';
      break;
  }

  return result;
}

module.exports = calculate;