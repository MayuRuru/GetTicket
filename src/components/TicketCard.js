import "../assets/styles/ticketCard.css";

const TicketCard = ({ product, type, quantity, unitPrice }) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{type}</td>
        <td>{quantity}</td>
        <td>{unitPrice}</td>
      </tr>
    </>
  );
};

export default TicketCard;
