import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import Post from "./components/Post";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/Lists/UserList";
import WelcomePosts from "./components/DefaultUsageComponents/WelcomePosts";

function App() {
  const marginTop = {
    marginTop: "20px",
  };
  return (
    <Router>
      {/* <div className="App"> */}
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<WelcomePosts />} />
              <Route path="/add" element={<Post />} />
              <Route path="/edit/:id" element={<Post />} />
              <Route path="/list" element={<PostList />} />
              <Route path="/userlist" element={<UserList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
