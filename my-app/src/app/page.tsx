import Image from "next/image";
import styles from "./page.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-center">Island Snow!</h1>
      </Container>
    </main>
  );
}
