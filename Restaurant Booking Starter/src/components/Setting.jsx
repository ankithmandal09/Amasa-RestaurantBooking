import React, { useEffect, useState } from "react";
import { ToggleLeft } from "lucide-react";
let restaurant = [
  {
    name: "Restaurant 1",
    city: "Hyderabad",
  },
  {
    name: "Restaurant 2",
    city: "Pune",
  },
  {
    name: "Restaurant 3",
    city: "Delhi",
  },
  {
    name: "Restaurant 4",
    city: "Bangalore",
  },
  {
    name: "Restaurant 5",
    city: "Mumbai",
  },
];
const Setting = () => {
    const [toggle, setToggle] = useState(false);
    
    function toggleButton() {
        if(!toggle){
            setToggle("Active"); 
        } else {
            setToggle("DeActive")
        }
    }

    useEffect(() => {
        toggleButton()
    },[])
  return (
    <>
      <div>
        {restaurant.length > 0 &&
          restaurant.map((r, i) => (
            <div key={i}>
              <h2>{r.name}</h2>
              <p>{r.city}</p>
              <h3 onClick={toggleButton}>
                <ToggleLeft />
              </h3>
            </div>
          ))}
      </div>
    </>
  );
};

export default Setting;
