import React,{useEffect, useState} from 'react'

const Booking = () => {
    let restaurant = [
        {
            name: "Restaurant1",
            city: "Hyderabad"
        },
        {
            name: "Restaurant2",
            city: "Pune"
        },
        {
            name: "Restaurant3",
            city: "Delhi"
        },
        {
            name: "Restaurant4",
            city: "Bangalore"
        },
        {
            name: "Restaurant5",
            city: "Mumbai"
        }
    ]

    
  return (
    <>
      <div>
        {restaurant.length > 0 &&
          restaurant.map((r,i) => (
            <div key={i}>
                  <h2>{r.name}</h2>
                  <p>{r.city}</p>
                  <button>Book</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Booking