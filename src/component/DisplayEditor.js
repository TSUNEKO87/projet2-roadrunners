import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Link,
} from "react-router-dom";
import React, { Component } from "react";
import "./DisplayEditor.css";
import Hotels from "./Hotels";
import FoodPlaces from "./FoodPlaces";
import Events from "./Events";
import axios from "axios";
import Map from "./Map";

const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export class DisplayEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

  fetchAPI = () => {
    const params = {
      location: "50.86585,4.331550",
      radius: "5000",
      type: "food",
      key: googleKey,
      maxResults: "60",
      pageToken:
        "ATtYBwLWjH0acRqcKn3U6D_fF6ysfiz4k-XSWYXFR6BNP3HyS-EjFOPlszTOsuEiTr_6AHG-foqGe4d2gq97QSQcscuAvIQSwVUP3IuhwZzuvTNzSpIgsI9r3VWmnRQS8OPeTkjwHCZuQqkWVRWmTYkft7jvTOKYiU5855qMJDzb_pQlhcSoyR4RQFdYu155ZLq6quJM7fGTBQNw6vflxUgpBtos4RIqlVuGgWk1_Rxjb-V4ET11Uug6EQGZjXdA4h5n2bhhG9zO29fM-aWygZunkZUixEObEmgpx4IfJYeq8oB0DiOcFr18Bi2OjlirJoOxAm5CxL9ZoBa1aVzajHFKJ99Q1ujZYyY3ZZmmdd8b_9koNUoTkuqZ8kZfY5iTbcl5507Df_kheNUqkKqtsotFOIBbkT2uWlA9j6YUjy8",
    };

    const url =
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

    axios
      .get(url, { params })

      .then((res) => {
        const locationInfo = res.data.results;

        this.setState({ info: locationInfo });
        console.log(this.state.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    return (
      <div className="editor">
        <div className="categories">
          <Link to="/application/lodging">Lodging</Link>
          <Link to="/application/food">Restaurants</Link>
          <Link to="/application/events">Events</Link>
        </div>
        <Route path="/application/lodging">
          <Hotels info={this.state.info} addOneStep={this.props.addOneStep} />
        </Route>
        <Route path="/application/food">
          <FoodPlaces
            info={this.state.info}
            addOneStep={this.props.addOneStep}
          />
        </Route>
        <Route path="/application/events">
          <Events info={this.state.info} addOneStep={this.props.addOneStep} />
        </Route>
      </div>
    );
  }
}

export default withRouter(DisplayEditor);
