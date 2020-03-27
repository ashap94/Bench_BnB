import React from "react";

const BenchMap = (props, ref) => {
  return <div id="map-container" ref={ref}></div>;
};

const forwardedBenchMap = React.forwardRef(BenchMap);

export default forwardedBenchMap;
