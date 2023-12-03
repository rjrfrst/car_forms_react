const Car = ({car}) => {

return ( 
        <div>
            <h2>{car.carName}</h2>
            <ul>{car.specs.map((specs, index) => <li key={index}>{specs}</li> )}</ul>
        </div>
    );
}

export default Car;