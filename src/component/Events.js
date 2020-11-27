import "./DisplayEditor.css";

function Events(props) {
  const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div>
      <div className="scroll">
        {props.info
          .filter((event) => event.types.includes("point_of_interest"))
          .map((filteredPlace) => {
            let url;
            url = filteredPlace.photos
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${filteredPlace.photos[0].photo_reference}&key=${googleKey}`
              : "https://lh3.googleusercontent.com/p/AF1QipOSnkXEL6muVIFyHPrvK2e8w8O-EjKg2vssitAZ=s1600-w400";
            return (
              <div
                onClick={() =>
                  props.addOneStep(filteredPlace, "point_of_interest")
                }
                className="places-disposition"
              >
                <img src={url} className="place-img" alt="eventImage" />
                <p>{filteredPlace.name}</p>
                <p>{filteredPlace.vicinity}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Events;
