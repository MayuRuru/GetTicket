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
          <tr>
            <th>Product</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>unitPrice</th>
          </tr>
          {tickets.map((tickets) => {
            return (
              <>
                <tr>
                  <td>{tickets.product}</td>
                  <td>{tickets.type}</td>
                  <td>{tickets.quantity}</td>
                  <td>{tickets.unitPrice}</td>
                </tr>
              </>
            );
          })}
          <div className="total">
            <p>Total is:</p>
          </div>
        </table>
      </div>
    </div>
  );
};

export default Home;

/* 
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
</div> */
