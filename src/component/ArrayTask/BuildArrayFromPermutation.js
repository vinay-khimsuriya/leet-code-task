import React from "react";

export default function BuildArrayFromPermutation({ arr }) {
  const newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   newArr.push(arr[arr[i]]);
  // }

  for (let postion of arr) {
    newArr.push(arr[postion]);
  }

  return (
    <div>
      <div className="h-screen border w-full">
        <h1 className="text-3xl border w-full my-20 text-blue-700 font-mono">
          Leet Task - Array Task: Build Array from Permutation <span>2</span>
        </h1>
        <div className="w-full">{`[${newArr}]`}</div>
      </div>
    </div>
  );
}
