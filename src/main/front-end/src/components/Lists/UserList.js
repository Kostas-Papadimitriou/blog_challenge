import React, { useEffect, useState } from "react";
import { fetchUsers } from "../store/user/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, ButtonGroup, Card, Table } from "react-bootstrap";
import UserService from "../Services/UserService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faList, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MyToast from "../DefaultUsageComponents/MyToast";

const UserList = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  //   const deleteUser = (id) => {
  //     UserService.deleteUser(id)
  //       .then((response) => {
  //         if (response.data !== null) {
  //           setShow(true);
  //           setTimeout(() => setShow(false), 3000);
  //         } else {
  //           setShow(false);
  //         }
  //       })
  //       .then(() => {
  //         // Fetch updated data after successful delete
  //         UserService.getAllUsers().then((data) => setFetchData(data));
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting post:", error);
  //       });
  //   };

  return (
    <div>
      {userData.error ? (
        <Alert variant="danger">{userData.error}</Alert>
      ) : (
        <div>
          <div style={{ display: show ? "block" : "none" }}>
            {" "}
            <MyToast message="O χρήστης διαγράγηκε επιτυχώς!" type="danger" />
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length === 0 ? (
                    <tr align="center">
                      <td colSpan="4">Υπάρχουν τόσοι χρήστες</td>
                    </tr>
                  ) : (
                    userData.map((user) => (
                      <tr align="center" key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                        <td>{user.email}</td>
                        <td>
                          <ButtonGroup>
                            <Link
                              to={"/edit/" + user.id}
                              className="btn btn-sm btn-outline-primary"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </Link>
                            {/* <Button size="sm" variant="outline-primary"></Button> */}
                            <Button
                              size="sm"
                              variant="outline-danger"
                              //   onClick={() => deletePost(post.id)}
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
      )}
      Hello all
    </div>
  );
};

export default UserList;
