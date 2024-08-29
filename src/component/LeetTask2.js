import React from "react";

export default function LeetTask2({ arr1, arr2 }) {
  //   console.log(arr1.reverse());
  let resultArray = [];
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      resultArray.push(arr1[i] + arr2[i]);
    }
  }
  console.log(resultArray.reverse());

  return (
    <div>
      <div>{`[${resultArray}]`}</div>
      {resultArray.map((i) => (
        <span> {i}</span>
      ))}
    </div>
  );
}
