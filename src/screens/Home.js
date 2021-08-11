import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import Container from "react-bootstrap/Container";

const words = ["HTML5", "CSS3", "JavaScript", "React", "SASS"];

const Home = () => {
  return (
    <div className="slide">
      <Container fluid="lg">
        <ReactTypingEffect
          text={words}
          eraseSpeed={300}
          typingDelay={1500}
          eraseDelay={4000}
          style={{ color: "#fff", fontSize: "2.3rem", display: "block" }}
        />
        <Link to="/posts">
          <button className="btn btn-primary my-5">Hemen Okumaya Başla</button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
