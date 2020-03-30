export const selectReviewsForBench = ({ benches, reviews }, bench) => {
  return bench.reviewIds.map(reviewId => reviews[reviewId]);
};
