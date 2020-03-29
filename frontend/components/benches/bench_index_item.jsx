import React from "react";

const BenchIndexItem = props => {
  return (
    <li>
      <p>{props.bench.description}</p>
      <p>Latitude: {props.bench.lat}</p>
      <p>Longitude: {props.bench.lng}</p>
      <p>Seating: {props.bench.seating}</p>
    </li>
  );
};

export default BenchIndexItem;
