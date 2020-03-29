import React, { useRef } from "react";
import BenchIndex from "../benches/benches_index";
import BenchMap from "../bench_map/bench_map";
import FilterForm from "./filter_form";

const Search = ({
  benches,
  fetchBenches,
  updateFilter,
  minSeating,
  maxSeating
}) => {
  //   const mapRef = useRef(null); // use this mapRef
  // to interact with mapfrom here or pass it down
  // workflow if needed to access div that contains
  // map elsewhere while this component is alive

  return (
    <div>
      <FilterForm
        minSeating={minSeating}
        maxSeating={maxSeating}
        updateFilter={updateFilter}
      />
      <BenchMap benches={benches} updateFilter={updateFilter} />
      <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    </div>
  );
};

export default Search;
