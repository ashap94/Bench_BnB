import * as APIBenchUtil from "../utils/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const fetchBenches = filters => dispatch =>
  APIBenchUtil.fetchBenches(filters).then(benches =>
    dispatch(receiveBenches(benches))
  );

export const createBench = benchForm => dispatch =>
  APIBenchUtil.createBench(benchForm).then(bench =>
    dispatch(receiveBench(bench))
  );
