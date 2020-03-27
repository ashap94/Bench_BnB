import React, { useEffect, useState } from "react";
import BenchIndexItem from "./bench_index_item";

const BenchIndex = props => {
  useEffect(() => {
    props.fetchBenches();
  }, []);

  return (
    <div>
      <h2>Bench List</h2>
      <br />
      <ul>
        {props.benches.map(bench => (
          <BenchIndexItem key={bench.id} bench={bench} />
        ))}
      </ul>
    </div>
  );
};

export default BenchIndex;
