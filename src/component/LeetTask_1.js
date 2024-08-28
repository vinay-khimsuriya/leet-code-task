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

  var twoSumWithMap = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }

    return null;
  };

  var twoSumWithTwoForLoop = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        let sum = nums[i] + nums[j];

        if (sum == target) {
          return [i, j];
        }
      }
    }
  };

  const result = twoSum([5, 1, 3], 4);
  const result1 = twoSumWithMap([5, 1, 3], 6);
  const result2 = twoSumWithTwoForLoop([5, 1, 3], 8);

  return (
    <div className="h-screen border w-full">
      <h1 className="text-3xl border w-full my-20 text-blue-700 font-mono">
        Leet Task : <span>1</span>
      </h1>
      <div className="w-full">
        <h1 className="my-1">{`Task with For in loop:[${result}]`}</h1>
        <h1 className="my-1">{`Task With Map: [${result1}]`}</h1>
        <h1 className="my-1">{`Task with Two For Loop[${result2}]`}</h1>
      </div>
    </div>
  );
}
