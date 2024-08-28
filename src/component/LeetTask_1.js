import React from "react";

export default function LeetTask_1() {
  var twoSum = function (nums, target) {
    let previousKey = null;
    for (let key in nums) {
      if (previousKey !== null) {
        let sum = nums[previousKey] + nums[key];
        if (sum === target) {
          return [previousKey, key];
        }
      }
      previousKey = key;
    }
  };

  const result = twoSum([5, 1, 3], 4);

  return (
    <div>
      <h1>{`[${result}]`}</h1>
    </div>
  );
}
