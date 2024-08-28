import React from "react";

export default function leetTask1() {
  var twoSum = function (nums, target) {
    let previousKey = null;
    for (let key in nums) {
      key = parseInt(key);
      if (previousKey !== null) {
        let sum = nums[previousKey] + nums[key];
        if (sum === target) {
          return [previousKey, key];
        }
      }
      previousKey = key;
    }
  };

  const result = twoSum([5, 1, 3], 6);

  return (
    <div>
      <h1>Result</h1>
      <h1>{result ? result : "none"}</h1>
    </div>
  );
}
