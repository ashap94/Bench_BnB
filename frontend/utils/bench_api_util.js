export const fetchBenches = data => {
  // filter["bounds"] = {
  //   northEast: { lat: 37.80971, lng: -122.39208 },
  //   southWest: { lat: 37.74187, lng: -122.47791 }
  // };

  // const bounds = {
  //   northEast: { lat: 37.80971, lng: -122.39208 },
  //   southWest: { lat: 37.74187, lng: -122.47791 }
  // };

  return $.ajax({
    url: "/api/benches",
    method: "GET",
    data
  });
};

export const fetchBench = id =>
  $.ajax({
    url: `/api/benches/${id}`,
    method: "GET"
  });

export const createBench = bench =>
  $.ajax({
    url: "/api/benches",
    method: "POST",
    data: { bench }
  });

export const createReview = review =>
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: { review }
  });
