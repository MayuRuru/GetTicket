import { useEffect, useState } from "react";
import TicketCard from "../components/TicketCard";
import { getTickets } from "../Service";
import "../assets/styles/home.css";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets()
      .then((data) => setTickets(data))
      .catch((error) => {
        throw new Error(
          "Oops, did you follow the instructions of README file?"
        );
      });
  }, []);

  return (
    <>
      <h1>Bon appetit!</h1>
      <img src="../assets/images/restaurant.png" alt="restaurant" />
      <div className="main_container">
        {tickets.map(({ id, product, type, quantity, unitPrice }) => (
          <TicketCard
            key={id}
            product={product}
            type={type}
            quantity={quantity}
            unitPrice={unitPrice}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
