import React from "react";
import BuildArrayFromPermutation from "./BuildArrayFromPermutation";
import ConcatenationOfArray from "./ConcatenationOfArray";
import FindMinimumOperationstoMakeAllElementsDivisiblebyThree from "./FindMinimumOperationstoMakeAllElementsDivisiblebyThree";
import FinalValueofVariableAfterPerformingOperations from "./FinalValueofVariableAfterPerformingOperations";

export default function ArrayTask() {
  const arr = ["a", "b", "c", "d"];
  return (
    <div>
      {/* <ConcatenationOfArray arr={arr} /> */}
      {/* <BuildArrayFromPermutation /> */}
      {/* <FindMinimumOperationstoMakeAllElementsDivisiblebyThree /> */}
      <FinalValueofVariableAfterPerformingOperations
        arr={["--X", "X++", "X++", "X++"]}
      />
    </div>
  );
}
