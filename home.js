import { Card } from "react-bootstrap";
import "./App.css";
import Bank from "./bank2.png";
export default function Home() {
  return (
    <div>
      <Card border="danger" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Bank} />

        <Card.Body>
          <Card.Title>Ss Bank </Card.Title>
          <Card.Text>
           Welcome to online bank.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
