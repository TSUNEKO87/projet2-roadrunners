import "./DisplayEditor.css";

function FoodPlaces(props) {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> c3816edeac6d4d3a50e393fe5692282057759190
    </div>
  );
}
export default FoodPlaces;
