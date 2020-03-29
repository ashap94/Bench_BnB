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

export const createBench = bench =>
  $.ajax({
    url: "/api/benches",
    method: "POST",
    data: { bench }
  });
