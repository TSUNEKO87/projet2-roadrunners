import "./DisplayEditor.css";

function FoodPlaces(props) {
  return (
    <div className="scroll">
      {props.info
        .filter((restaurant) => restaurant.types.includes("food"))
        .map((filteredPlace) => (
          <div
            onClick={() => props.addOneStep(filteredPlace, "food")}
            className="places-disposition"
          >
            <p>{filteredPlace.name}</p>
            <p>{filteredPlace.vicinity}</p>
          </div>
        ))}
    </div>
  );
}
export default FoodPlaces;
