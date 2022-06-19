import "../assets/styles/ticketCard.css";

const TicketCard = ({ product, type, quantity, unitPrice }) => {
  return (
    <div className="card_container">
      <h2>{product}</h2>
      <h4>{type}</h4>
      <h4>{quantity}</h4>
      <h4>{unitPrice}</h4>
    </div>
  );
};

export default TicketCard;
