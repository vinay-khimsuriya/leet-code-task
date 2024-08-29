import React from "react";
import BuildArrayFromPermutation from "./BuildArrayFromPermutation";

export default function ArrayTask() {
  const arr = ["a", "b", "c", "d"];
  const arrNumber = [0, 2, 1, 5, 3, 4];
  return (
    <div>
      {/* <ConcatenationOfArray arr={arr} /> */}
      <BuildArrayFromPermutation arr={arrNumber} />
      {/* <FindMinimumOperationstoMakeAllElementsDivisiblebyThree arr={arrNumber} /> */}
      {/* <FinalValueofVariableAfterPerformingOperations arr={["--X", "X++", "X++", "X++"]} />*/}
    </div>
  );
}
