import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  const [word, setWord] = useState("");
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
            <Form inline>
              <FormControl
                type="text"
                placeholder="ara"
                className="mr-sm-2"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <Link to={"/search/" + word.toLowerCase()}>
                <Button
                  onClick={() => setWord("")}
                  variant="info"
                  disabled={word.trim() === ""}
                >
                  Search
                </Button>
              </Link>
            </Form>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </header>
  );
};

export default Header;
