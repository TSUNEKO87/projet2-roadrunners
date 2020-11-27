import "./DisplayEditor.css";

function Hotels(props) {
  const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  console.log(props);
  return (
    <div className="scroll">
      {props.info
        .filter((hotel) => hotel.types.includes("lodging"))
        .map((filteredPlace) => {
          let url;
          url = filteredPlace.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${filteredPlace.photos[0].photo_reference}&key=${googleKey}`
            : "https://lh3.googleusercontent.com/p/AF1QipOSnkXEL6muVIFyHPrvK2e8w8O-EjKg2vssitAZ=s1600-w400";

          console.log(url);
          return (
            <div
              onClick={() => props.addOneStep(filteredPlace, "lodging")}
              className="places-disposition"
            >
              <img className="place-img" src={url} alt="hotelImage" />
              <p>{filteredPlace.name}</p>
              <p>{filteredPlace.vicinity}</p>
            </div>
          );
        })}
    </div>
  );
}
export default Hotels;
