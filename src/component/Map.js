import { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
  DistanceMatrixService,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

// import { getGeocode, getLatLng } from "use-places-autocomplete";

// const google = window.google; //To define Google

const containerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 45.76875,
  lng: 4.775888,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
  // zoomControlOptions: {
  //   position: google.maps.ControlPosition.LEFT_CENTER, //Zooming Controls
  // },
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      travelMode: "DRIVING",
      origin: "",
      destination: "",
    };
  }
  directionsCallback = (response) => {
    //I don't understand this part, what does response is supposed to do ? is it useful ?
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        this.setState(() => ({ response }));
      } else {
        console.log("response: ", response);
      }
    }
  };

  // checkDriving({ target: { checked } }) {
  //   checked &&
  //     this.setState(() => ({
  //       travelMode: "DRIVING",
  //     }));
  // }

  // getOrigin = (ref) => {
  //   ref = this.state.origin;
  // };
  // getDestination = (ref) => {
  //   ref = this.state.destination;
  // };

  onClick = () => {
    if (this.state.origin.value !== "" && this.state.destination.value !== "") {
      this.setState({
        origin: this.state.origin.value,
        destination: this.state.destination.value,
      });
    }
  };
  onMapClick = (...args) => {
    //I don't understand this part
    console.log("OnClick args: ", args);
  };

  render() {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="ORIGIN">Origin</label>
                <br />
                <input
                  id="ORIGIN"
                  className="form-control"
                  type="text"
                  ref={this.state.origin} //getOrigin
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="DESTINATION">Destination</label>
                <br />
                <input
                  id="DESTINATION"
                  className="form-control"
                  type="text"
                  ref={this.state.destination} //getDestination
                />
              </div>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.onClick}
            >
              Build Route
            </button>
          </div>

          <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={containerStyle}
            options={options}
          ></GoogleMap>
        </div>
      </LoadScript>
    );
  }
}

export default Map;
