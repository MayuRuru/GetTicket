import "../assets/styles/ticketCard.css";

const TicketCard = ({ tickets }) => {
  return (
    <table className="card_container">
      <tr>
        <th className="text">{tickets.product}</th>
      </tr>

      {tickets.map((tickets, key) => {
        return (
          <tr key={key}>
            <td className="text">{tickets.type}</td>
            <td className="text">{tickets.quantity}</td>
            <td className="text">{tickets.unitPrice}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default TicketCard;
