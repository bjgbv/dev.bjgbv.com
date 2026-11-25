import React, { useState } from "react";

const Map = () => {
  const [viewMap, setViewMap] = useState(false);
  return (
    <section className="map_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12 no-padding">
            {/* <h2 className="map_title">View Map</h2> */}
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
                style={viewMap ? { height: "400px" } : { height: "0px" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="google map"
              ></iframe>
              <h2
                onClick={() => setViewMap(!viewMap)}
                className={viewMap ? "map_title" : "close_btn"}
              >
                {!viewMap ? "View Map" : "Close Map"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
