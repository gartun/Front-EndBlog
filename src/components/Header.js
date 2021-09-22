import { useState, useRef } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [word, setWord] = useState("");
  const btnRef = useRef();

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      btnRef.current.click();
    }
  };

  return (
    <header>
      <NavBar bg="primary" variant="dark" expand="md" collapseOnSelect>
        <Container fluid="lg">
          <Link to="/">
            <NavBar.Brand>Front-EndBlog</NavBar.Brand>
          </Link>
          <NavBar.Toggle aria-controls="responsive-navbar-nav" />
          <NavBar.Collapse
            id="responsive-navbar-nav"
            className="d-md-flex justify-content-end"
          >
            <Nav className="ml-auto">
              <Link to="/users">
                <NavBar.Text className="navlink">Yazarlar</NavBar.Text>
              </Link>
              <Link to="/posts">
                <NavBar.Text className="navlink">Yazılar</NavBar.Text>
              </Link>
            </Nav>
            <Form inline onKeyPress={handleKeypress}>
              <FormControl
                type="text"
                placeholder="ara"
                className="mr-sm-2"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              {word.trim() !== "" ? (
                <Link to={"/search/" + word.toLowerCase()}>
                  <Button
                    ref={btnRef}
                    onClick={() => setWord("")}
                    variant="info"
                  >
                    Search
                  </Button>
                </Link>
              ) : (
                <Button variant="info" disabled>
                  Search
                </Button>
              )}
            </Form>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </header>
  );
};

export default Header;
