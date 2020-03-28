import React, { useEffect } from "react";

const BenchMap = (props, map) => {
  // map is forwardedRef
  useEffect(() => {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    map = new google.maps.Map(mapNode, mapOptions);
  }, []);

  return <div id="map-container" ref={map => (mapNode = map)}></div>;
};

const forwardedBenchMap = React.forwardRef(BenchMap);

export default forwardedBenchMap;
