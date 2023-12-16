import {
  faEdit,
  faList,
  faPlusSquare,
  faSave,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PostService from "./Services/PostService";
import MyToast from "./DefaultUsageComponents/MyToast";
import { useNavigate, useParams } from "react-router-dom";

const Post = (props) => {
  const [postId, setPostId] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredPost, setEnteredPost] = useState("");
  const [enteredCategorie, setEnteredCatergorie] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const { id } = useParams();

  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const submitPost = (event) => {
    event.preventDefault();
    const post = {
      id: postId,
      title: enteredTitle,
      author: enteredAuthor,
      article: enteredPost,
      categorie: enteredCategorie,
      date: enteredDate,
    };
    PostService.savePost(post).then((response) => {
      if (response.data != null) {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
        resetPost();
      } else {
        setShow(false);
      }
    });
  };
  const updatePost = (event) => {
    const formattedDate = new Date();
    setEnteredDate(formattedDate);
    event.preventDefault();
    const post = {
      id: postId,
      title: enteredTitle,
      author: enteredAuthor,
      article: enteredPost,
      categorie: enteredCategorie,
      date: enteredDate,
    };
    PostService.updatePost(postId, post).then((response) => {
      console.log("Response from server:", response);
      if (response.data != null) {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
        // resetPost();
        setTimeout(() => postList(), 1000);
      } else {
        setShow(false);
      }
    });
  };
  const resetPost = () => {
    setPostId("");
    setEnteredTitle("");
    setEnteredAuthor("");
    setEnteredPost("");
    setEnteredCatergorie("");
    setEnteredDate("");
  };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "author") {
      setEnteredAuthor(value);
    } else if (identifier === "categorie") {
      setEnteredCatergorie(value);
    } else {
      setEnteredPost(value);
    }
  };
  const postList = () => {
    return navigate("/list");
  };
  useEffect(() => {
    // console.log(postId);
    setEnteredDate(new Date());

    if (id) {
      findPostById(+id);
    }
    setPostId(id);
  }, [id]);
  const findPostById = (id) => {
    PostService.getPostById(id).then((data) => {
      console.log(data.title);
      if (data != null) {
        setEnteredTitle(data.title);
        setEnteredAuthor(data.author);
        setEnteredPost(data.article);
        setEnteredCatergorie(data.catigorie);
        setEnteredDate(data.date);
      }
    });
  };

  return (
    <div>
      <div style={{ display: show ? "block" : "none" }}>
        <MyToast message="To άρθρο αποθηκεύτηκε επιτυχώς!" type="success" />
      </div>{" "}
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <FontAwesomeIcon icon={postId ? faEdit : faPlusSquare} />
          {"  "}
          {postId ? "ΕΝΗΜΕΡΩΣΕ" : "ΠΡΟΣΘΕΣΕ"}
          {"  "}
          ΕΝΑ ΑΡΘΡΟ
        </Card.Header>
        <Form
          id="postFormId"
          onSubmit={postId ? updatePost : submitPost}
          onReset={resetPost}
        >
          <Card.Body>
            {" "}
            {/* <Form.Row>*/}
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  autoComplete="off"
                  required
                  type="text"
                  name="title"
                  value={enteredTitle}
                  onChange={(event) => {
                    inputChangeHandler("title", event.target.value);
                  }}
                  // className={"bg-dark text-white"}
                  placeholder="Πρόσθεσε έναν τίτλο"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  autoComplete="off"
                  required
                  type="text"
                  name="author"
                  value={enteredAuthor}
                  onChange={(event) => {
                    inputChangeHandler("author", event.target.value);
                  }}
                  placeholder="Παρακαλώ προσθέστε όνομα αρθρογράφου"
                />
              </Form.Group>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formBasicCategories"
            >
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Select
                  autoComplete="off"
                  required
                  name="title"
                  value={enteredCategorie}
                  onChange={(event) => {
                    inputChangeHandler("categorie", event.target.value);
                  }}
                >
                  <option value="">Επιλέξτε...</option>
                  <option value="Επικαιρότητα">Επικαιρότητα</option>
                  <option value="Εντόπια">Εντόπια</option>
                  <option value="Διεθνή">Διεθνή</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                {id ? (
                  <>
                    {" "}
                    <Form.Label>date</Form.Label>
                    <Form.Control
                      autoComplete="off"
                      //   required
                      type="text"
                      name="author"
                      value={enteredDate}
                      onChange={(event) => {
                        inputChangeHandler("author", event.target.value);
                      }}
                      placeholder="Παρακαλώ προσθέστε όνομα αρθρογράφου"
                    />
                  </>
                ) : (
                  ""
                )}
              </Form.Group>
            </Form.Group>
            {/* </Form.Row> */}
            <Form.Group as={Row} className="mb-3">
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Article</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  type="textarea"
                  name="article"
                  value={enteredPost}
                  onChange={(event) => {
                    inputChangeHandler("post", event.target.value);
                  }}
                  placeholder="Παρακαλώ προσθέστε  άρθρου"
                />
              </Form.Group>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              <FontAwesomeIcon icon={faSave} />
              {postId ? "Ενημέρωση" : "Αποθήκευση"}
            </Button>
            {"   "}
            <Button size="sm" variant="info" type="reset">
              <FontAwesomeIcon icon={faUndo} />
              Εκκαθάριση
            </Button>
            {"   "}
            <Button size="sm" variant="info" type="button" onClick={postList}>
              <FontAwesomeIcon icon={faList} />
              Λίστα Άρθρων
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
};

export default Post;
