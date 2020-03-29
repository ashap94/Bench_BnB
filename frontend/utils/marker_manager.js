export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(benches) {
    const benchesObj = {};
    benches.forEach(bench => (benchesObj[bench.id] = bench));

    benches
      .filter(bench => !this.markers[bench.id])
      .forEach(bench => this.createMarkerFromBench(bench, this.handleClick));

    Object.keys(this.markers)
      .filter(benchId => !benchesObj[benchId])
      .forEach(benchId => this.removeMarker(this.markers[benchId]));
  }

  removeMarker(marker) {
    this.markers[marker.benchId].setMap(null);
    delete this.markers[marker.benchId];
  }

  createMarkerFromBench(bench) {
    let latLng = { lat: bench.lat, lng: bench.lng };
    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: bench.description,
      benchId: bench.id
    });

    marker.addListener("click", () => this.handleClick(bench));
    this.markers[bench.id] = marker;
  }
}
