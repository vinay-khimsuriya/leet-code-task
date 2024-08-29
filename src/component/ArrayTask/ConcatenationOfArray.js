import React from "react";

export default function ConcatenationOfArray({ arr }) {
  // const arrConcat = arr.concat(arr);

  // const newArr = [arr];

  const newArr = [arr, arr];
  // for (let x of arr) {
  //   newArr.push(x);
  // }
  console.log(newArr);

  return (
    <div>
      <div className="h-screen border w-full">
        <h1 className="text-3xl border w-full my-20 text-blue-700 font-mono">
          Leet Task - Array Task: Concatenation of Array <span>1</span>
        </h1>
        {/* <div className="w-full">{`[${arrConcat}]`}</div> */}
        {/* <div className="w-full">{`[${arr.concat(arr)}]`}</div> */}
        <div className="w-full">{`[${newArr}]`}</div>
      </div>
    </div>
  );
}
