import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
  const mystyle = {
    color: "red"
  };
  return (
    <>
      <Navbar bg="success" variant="light" expand="lg">
        <Container>
          <ul class="">
            <Navbar.Toggle aria-current="page" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className="navbar-brand"
                  activeClassName="navbar-brand--active"
                  href="#/"
                  title=" Home Page"
                >
                  {" "}
                  Home{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Create your Account"
                  href="#/CreateAccount/"
                >
                  {" "}
                  CreateAccount{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Deposit in your Account"
                  href="#/login/"
                >
                  {" "}
                  login{" "}
                  </Nav.Link>
                  <Nav.Link
                  className="navbar-brand"
                  title="login in your Account"
                  href="#/Deposit/"
                  >
                    {" "}
                    Deposit{" "}
                  </Nav.Link>
                  <Nav.Link
                  className="navbar-brand"
                  title="Withdraw from your Account"
                  href="#/Withdraw/"
                >
                  {" "}
                  WithDraw{" "}
                </Nav.Link>
                <Nav.Link
                  className="navbar-brand"
                  title="Track your Transactions"
                  href="#/AllData/"
                >
                  All Data
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </ul>
        </Container>
      </Navbar>
    </>
  );
}
