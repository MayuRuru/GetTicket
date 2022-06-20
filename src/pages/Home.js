import { useEffect, useState } from "react";
import TicketCard from "../components/TicketCard";
import { getTickets, Total } from "../Service";
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
    <div className="main_container">
      <div className="head_container">
        <h1 className="title">Bon appetit!</h1>
        <img
          className="main_image"
          src={require("../assets/images/restaurant.png")}
          alt="restaurant"
        />
      </div>

      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>unitPrice</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(({ id, product, type, quantity, unitPrice }) => (
              <TicketCard
                key={id}
                product={product}
                type={type}
                quantity={quantity}
                unitPrice={unitPrice}
              />
            ))}

            <tr className="total">
              <td>Total is:{Total()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
