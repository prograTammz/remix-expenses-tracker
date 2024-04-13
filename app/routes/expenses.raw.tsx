import { json } from "@remix-run/node";

export default function ExpensesRaw() {
  return json({ message: "expenses" });
}
