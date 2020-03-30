import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BenchMap from "../bench_map/bench_map";
import BenchDetail from "./bench_detail";
import ReviewFormContainer from "./review_form_container";
import { ProtectedRoute } from "../../utils/route_util";
import { ReviewLink } from "../../utils/link_util";

const BenchShow = ({ bench, benchId, fetchBench, reviews }) => {
  const benches = {
    [benchId]: bench
  };

  const benchDetail = bench ? (
    <BenchDetail bench={bench} reviews={reviews} />
  ) : null;

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
      <div className="right-half bench-details">
        {benchDetail}
        <ReviewLink
          component={ReviewFormContainer}
          to={`/benches/${benchId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute
          path="/benches/:benchId/review"
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};

export default BenchShow;
