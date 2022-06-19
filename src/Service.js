import axios from "axios";

const TICKETS_API = "http://localhost:8000/tickets";

export async function getTickets() {
  return axios.get(TICKETS_API).then((res) => res.data);
}
