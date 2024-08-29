import React from "react";

export default function LeetTask3({ string }) {
  const arr = string.split("");
  let longArr = [];
  let longestSubString = "";
  let longestSubStringLength = 0;
  let subStringArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!longArr.includes(arr[i])) {
      longArr.push(arr[i]);
    } else {
      let indexOfChar = longArr.indexOf(arr[i]);

      subStringArr.push(longArr);
      longArr = longArr.slice(indexOfChar + 1);
      longArr.push(arr[i]);

      //   for (let j = indexOfChar + 1; j < longArr.length; j++) {
      //     longArr.push(longArr[j]);
      //   }
    }
  }

  for (let x of subStringArr) {
    if (x.length > longestSubStringLength) {
      longestSubString = x;
      longestSubStringLength = x.length;
    }
  }
  if (longArr.length > 0) {
    subStringArr.push(longArr);
  }

  return (
    <div className="h-screen border w-full">
      <h1 className="text-3xl border w-full my-20 text-blue-700 font-mono">
        Leet Task : <span>3</span>
      </h1>
      <div className="w-full">
        {longestSubString + "=" + longestSubStringLength}
      </div>
    </div>
  );
}

// objectArray.push({ longArr: [...longArr], length: longArr.length });
// objectArray.push({ longArr: [...longArr], length: longArr.length });

//   for (let x of arr) {
//     if (!longArr.includes(x)) {
//       longArr.push(x);
//     } else {
//       subStringArr.push(longArr);
//       longArr = [x];
//     }
//   }

//   if (arr[i - 1] !== arr[i]) {
//     longArr = [arr[i - 1], arr[i]];
//   } else {
//     longArr = [arr[i]];
//   }
