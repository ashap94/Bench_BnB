import React from "react";

class BenchMap extends React.Component {
  componentDidMount() {
    console.log("WHAT DOES refs look LIKE:   ", this.refs.map);

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return <div id="map-container" ref="map"></div>;
  }
}

export default BenchMap;
