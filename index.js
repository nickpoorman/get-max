var isFiniteNumber = require('is-finite-number');

/**
 * Get the maximum of two numbers that works the way you would expect.
 * If neither value is a valid finite number returns nothing.
 * If one value is not a valid number return the other.
 * Otherwise return the max of the two
 */
module.exports = function getMax(leftMax, rightMax) {
  var isLeftFinite = isFiniteNumber(leftMax);
  var isRightFinite = isFiniteNumber(rightMax);
  if (!isLeftFinite && !isRightFinite) return;
  if (!isRightFinite) return leftMax;
  if (!isLeftFinite) return rightMax;
  if (leftMax > rightMax) return leftMax;
  return rightMax;
}
