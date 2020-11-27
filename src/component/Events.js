import "./DisplayEditor.css";

function Events(props) {
  return (
    <div>
      <div className="scroll">
        {props.info
          .filter((event) => event.types.includes("point_of_interest"))
          .map((filteredPlace) => (
            <div
              onClick={() =>
                props.addOneStep(filteredPlace, "point_of_interest")
              }
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
export default Events;
