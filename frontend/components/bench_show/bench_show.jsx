import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BenchMap from "../bench_map/bench_map";
import BenchDetail from "./bench_detail";

const BenchShow = ({ bench, benchId, fetchBench }) => {
  const [loaded, setLoaded] = useState(false);

  const benches = {
    [benchId]: bench
  };

  const benchDetail = bench ? <BenchDetail bench={bench} /> : null;

  if (bench === undefined) {
    fetchBench(benchId);
    //   return null;
  }

  return (
    <div className="single-bench-show">
      <div className="single-bench-map">
        <Link to="/">Back to Benches Index</Link>
        <BenchMap
          benches={benches}
          benchId={benchId}
          singleBench={true}
          fetchBench={fetchBench}
        />
      </div>
      <div className="right-half bench-details">{benchDetail}</div>
    </div>
  );
};

export default BenchShow;
