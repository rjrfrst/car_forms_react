import { useState } from "react";

const CarContainer = () => {

    const [listOfCars, setListOfCars] = useState(
        [
            {
                carName: "Toyota Yaris",
                    specs: [
                        "Japanese brand",
                        "Five door",
                        "Four wheels",
                        "Petrol"
                    ],
                    price: 200,
                    rating: 5
            },
            {
                carName: "Volkswagen Beetle",
                    specs: [
                        "German brand",
                        "Three door",
                        "Four wheels",
                        "Petrol"
                    ],
                    price: 400,
                    rating: 4

            },
            {
                carName: "Tesla Cybertruck",
                    specs: [
                        "Japanese brand",
                        "Five door",
                        "Four wheels",
                        "Petrol"
                    ],
                    price: 100,
                    rating: 6
            }
        ]
    )

    return (  );
}
 
export default CarContainer;

