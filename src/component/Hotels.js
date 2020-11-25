import "./DisplayEditor.css";

function Hotels(props) {
  console.log(props.info);
  return (
    <div>
      <div>
        {props.info
          .filter((hotel) => hotel.types.includes("lodging"))
          .map((filteredPlaces) => (
            <div className="places-disposition">
              <p>{filteredPlaces.name}</p>
              <p>{filteredPlaces.vicinity}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Hotels;
