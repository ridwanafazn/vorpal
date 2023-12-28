import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavigationBar() {
  return (
    <Navbar
      className="bg-body-tertiary sticky-top"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <p className="text-logo d-inline fw-bold ms-2">Vorpalskie</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
