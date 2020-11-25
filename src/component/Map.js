import { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { withRouter } from "react-router-dom";

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
      origin: this.props.location.state.start,
      destination: this.props.location.state.end,
    };
  }
  directionsCallback = (response) => {
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

  onClick = () => {
    if (this.origin.value !== "" && this.destination.value !== "") {
      this.setState({
        origin: this.origin.value,
        destination: this.destination.value,
      });
    }
  };

  render() {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <div>
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

export default withRouter(Map);
