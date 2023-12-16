import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Welcome = () => {
  return (
    <Container className="bg-dark text-white">
      <h1>Welcome to My enviromental Blog</h1>
      <p>
        <blockquote
          cite="http://www.worldwildlife.org/who/index.html"
          className="blockquote mb-0"
        >
          For 50 years, WWF has been protecting the future of nature. The
          world's leading conservation organization, WWF works in 100 countries
          and is supported by 1.2 million members in the United States and close
          to 5 million globally.
        </blockquote>
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Container>
  );
};

export default Welcome;
