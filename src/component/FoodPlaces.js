import "./DisplayEditor.css";

// const places = [
//   { type: "hotel", name: "test1", address: "Rue des Comédiens 22" },
//   { type: "restaurant", name: "test2", address: "Rue des Comédiens 24" },
//   { type: "event", name: "test3", address: "Rue des Comédiens 26" },
//   { type: "hotel", name: "test4", address: "Rue des Comédiens 28" },
// ];

function FoodPlaces(props) {
  return (
    <div>
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
    </div>
  );
}
export default FoodPlaces;
