import * as APIBenchUtil from "../utils/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

const receiveBench = ({ bench, reviews, authors }) => ({
  type: RECEIVE_BENCH,
  bench,
  reviews,
  authors
});

export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author
});

export const createReview = review => dispatch =>
  APIBenchUtil.createReview(review).then(review =>
    dispatch(receiveReview(review))
  );

export const fetchBenches = filters => dispatch =>
  APIBenchUtil.fetchBenches(filters).then(benches =>
    dispatch(receiveBenches(benches))
  );

export const createBench = benchForm => dispatch =>
  APIBenchUtil.createBench(benchForm).then(bench =>
    dispatch(receiveBench(bench))
  );

export const fetchBench = id => dispatch =>
  APIBenchUtil.fetchBench(id).then(payload => dispatch(receiveBench(payload)));
