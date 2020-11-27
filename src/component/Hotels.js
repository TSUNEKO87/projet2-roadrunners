import "./DisplayEditor.css";

function Hotels(props) {
  console.log(props);
  return (
<<<<<<< HEAD
    <div>
      <div className="scroll">
        {props.info
          .filter((hotel) => hotel.types.includes("lodging"))
          .map((filteredPlace) => (
            <div
              onClick={() => props.addOneStep(filteredPlace, "lodging")}
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
        .filter((hotel) => hotel.types.includes("lodging"))
        .map((filteredPlace) => (
          <div
            onClick={() => props.addOneStep(filteredPlace, "lodging")}
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
export default Hotels;
