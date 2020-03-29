import React, { useState, useEffect } from "react";

const FilterForm = props => {
  const [minSeating, setMinSeating] = useState(props.minSeating);
  const [maxSeating, setMaxSeating] = useState(props.maxSeating);

  const handleMinSeating = e => {
    setMinSeating(parseInt(e.currentTarget.value));
    props.updateFilter("minSeating", e.currentTarget.value);
  };

  const handleMaxSeating = e => {
    setMaxSeating(parseInt(e.currentTarget.value));
    props.updateFilter("maxSeating", e.currentTarget.value);
  };

  return (
    <div>
      <span className="filter">Filter results:</span>
      <br />
      <label>Minimum Seats</label>
      <input type="number" value={minSeating} onChange={handleMinSeating} />
      <br />
      <label>Maximum Seats</label>
      <input type="number" value={maxSeating} onChange={handleMaxSeating} />
    </div>
  );
};

export default FilterForm;
