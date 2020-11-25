import "./DisplayEditor.css";

function Hotels(props) {
  console.log(props);
  return (
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
  );
}
export default Hotels;
