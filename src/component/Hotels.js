import "./DisplayEditor.css";

function Hotels(props) {
  console.log(props.info);
  return (
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
    </div>
  );
}
export default Hotels;
