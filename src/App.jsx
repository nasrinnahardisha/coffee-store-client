// import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard/CoffeeCard";
import { useEffect, useState } from "react";

function App() {
  // const loadedCoffees = useLoaderData();
  // const [coffees, setCoffees] = useState(loadedCoffees);
  const [bookings, setBookings] = useState([]);
  const url = "https://coffee-store-server-gilt-delta.vercel.app/coffee";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div className="m-20 ">
      <h1 className="text-5xl text-center my-20 text-pink-600">
        Hotel Room {bookings.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {bookings.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={bookings}
            setCoffees={setBookings}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
