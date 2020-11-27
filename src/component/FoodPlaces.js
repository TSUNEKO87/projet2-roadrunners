import "./DisplayEditor.css";

function FoodPlaces(props) {
  const googleKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div className="scroll">
      {props.info
        .filter((restaurant) => restaurant.types.includes("food"))
        .map((filteredPlace) => {
          let url;
          url = filteredPlace.photos
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${filteredPlace.photos[0].photo_reference}&key=${googleKey}`
            : "https://lh3.googleusercontent.com/p/AF1QipOSnkXEL6muVIFyHPrvK2e8w8O-EjKg2vssitAZ=s1600-w400";
          return (
            <div
              onClick={() => props.addOneStep(filteredPlace, "food")}
              className="places-disposition"
            >
              <img className="place-img" src={url} alt="restimage" />
              <p>{filteredPlace.name}</p>
              <p>{filteredPlace.vicinity}</p>
            </div>
          );
        })}
    </div>
  );
}
export default FoodPlaces;
