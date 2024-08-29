import React from "react";

export default function FindMinimumOperationstoMakeAllElementsDivisiblebyThree({
  arr,
}) {
  let minimum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 3 !== 0) {
  //     minimum = minimum + 1;
  //   }
  // }

  // arr.forEach((arrObject) => {
  //   arrObject % 3 === 0 ? (minimum = minimum) : minimum++;
  // });

  // arr.map((arrObject) => {
  //   arrObject % 3 === 0 ? (minimum = minimum) : minimum++;
  // });

  for (let x of arr) {
    if (x % 3 !== 0) {
      minimum += 1;
    }
  }

  return (
    <div>
      <div className="h-screen border w-full">
        <h1 className="text-3xl border w-full my-20 text-blue-700 font-mono">
          Leet Task - Array Task: Find Minimum Operations to Make All Elements
          Divisible by Three <span>3</span>
        </h1>
        <div className="w-full">
          Minimum number is not Divisible by Three :{minimum}
        </div>
      </div>
    </div>
  );
}
