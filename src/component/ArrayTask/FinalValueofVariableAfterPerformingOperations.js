import React from "react";

export default function ({ arr }) {
  let count = 0;

  //////   way-1
  // for (let x of arr) {
  //   if (x === "++X" || x === "X++") {
  //     count += 1;
  //   } else {
  //     count -= 1;
  //   }
  // }

  /////    way-2
  // arr.map((object) => {
  //   if (object.includes("+")) {
  //     count += 1;
  //   } else count -= 1;
  // });

  /////   way-3
  // arr.forEach((object) => {
  //   if (object.includes("+")) {
  //     count += 1;
  //   } else count -= 1;
  // });

  /////    way-4
  // for (let op of arr) {
  //   if (op === "--X" || op === "X--") count--;
  //   if (op === "++X" || op === "X++") count++;
  // }

  ////   way-5
  arr.forEach((arrObject) => (arrObject.includes("+") ? count++ : count--));

  return (
    <div>
      <div className="h-screen border w-full">
        <h1 className="text-3xl border w-full my-20 text-blue-700 font-mono">
          Leet Task - Array Task: Final Value of Variable After Performing
          Operations <span>4</span>
        </h1>
        <div className="w-full">{count}</div>
      </div>
    </div>
  );
}
