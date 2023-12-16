import { faEdit, faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Nav, Table } from "react-bootstrap";
import PostService from "./Services/PostService";
import MyToast from "./DefaultUsageComponents/MyToast";
import { Link } from "react-router-dom";

const PostList = () => {
  const [fetchData, setFetchData] = useState([]);
  // Initialize the show state
  const [show, setShow] = useState(false);

  useEffect(() => {
    PostService.getAllPosts().then((data) => setFetchData(data));
  }, []);
  const deletePost = (id) => {
    PostService.deletePost(id)
      .then((response) => {
        if (response.data !== null) {
          setShow(true);
          setTimeout(() => setShow(false), 3000);
        } else {
          setShow(false);
        }
      })
      .then(() => {
        // Fetch updated data after successful delete
        PostService.getAllPosts().then((data) => setFetchData(data));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div>
      <div style={{ display: show ? "block" : "none" }}>
        {" "}
        <MyToast message="To άρθρο διαγράγηκε επιτυχώς!" type="danger" />
      </div>{" "}
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
          <FontAwesomeIcon icon={faList} />
          ΟΛΑ ΜΑΣ ΤΑ ΑΡΘΡΑ
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>TEXT</th>
                <th>Categories</th>
                <th>Created at</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {fetchData.length === 0 ? (
                <tr align="center">
                  <td colSpan="4">Υπάρχουν τόσα post </td>
                </tr>
              ) : (
                fetchData.map((post) => (
                  <tr align="center" key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.article}</td>
                    <td>{post.categorie}</td>
                    <td>{post.date}</td>
                    <td>
                      <ButtonGroup>
                        <Link
                          to={"/edit/" + post.id}
                          className="btn btn-sm btn-outline-primary"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        {/* <Button size="sm" variant="outline-primary"></Button> */}
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => deletePost(post.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostList;
