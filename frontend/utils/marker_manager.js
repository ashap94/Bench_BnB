export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log("time to update");
    if (benches.length !== 0) {
      for (let i = 0; i < benches.length; i++) {
        let bench = benches[i];
        if (!this.markers[bench.id]) {
          this.createMarkerFromBench(bench);
        }
      }
    }
  }

  createMarkerFromBench(bench) {
    let latLng = { lat: bench.lat, lng: bench.lng };
    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: bench.description
    });
    this.markers[bench.id] = marker;
  }
}
