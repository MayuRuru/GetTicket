import axios from "axios";
import { useState, useEffect } from "react";

export const TICKETS_API = "http://localhost:8000/tickets";

export async function getTickets() {
  return axios.get(TICKETS_API).then((res) => res.data);
}

export function Total() {
  const [tickets, setTickets] = useState([]);
  //const [total, setTotal] = useState();

  useEffect(() => {
    getTickets().then((res) => {
      setTickets(res);
    });
  }, []);

  let total = 0;
  tickets.map(({ quantity, unitPrice }) => {
    return (total += quantity * unitPrice);
  });

  console.log(total);
  return total;
}
