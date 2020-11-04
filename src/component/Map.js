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
  lat: 50.8466,
  lng: 4.3528,
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

  checkDriving({ target: { checked } }) {
    checked && this.setState(() => ({ travelMode: "DRIVING" }));
  }

  getOrigin = (ref) => {
    this.origin = ref;
  };
  getDestination = (ref) => {
    this.destination = ref;
  };

  onClick = () => {
    if (this.origin.value !== "" && this.destination.value !== "") {
      this.setState({
        origin: this.origin.value,
        destination: this.destination.value,
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
                  ref={this.getOrigin}
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
                  ref={this.getDestination}
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
          >
            {this.state.origin !== "" && this.state.destination !== "" && (
              <DirectionsService
                options={{
                  destination: this.state.destination,
                  origin: this.state.origin,
                  travelMode: this.state.travelMode,
                }}
                callback={this.directionsCallback}
              />
            )}
            {this.state.response !== null && (
              <DirectionsRenderer
                options={{ directions: this.state.response }}
              />
            )}
          </GoogleMap>
        </div>
      </LoadScript>
    );
  }
}

export default Map;
