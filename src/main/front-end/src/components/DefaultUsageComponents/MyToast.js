import React from "react";
import { Toast } from "react-bootstrap";

const MyToast = (props) => {
  const toastCss = {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: "1",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2),0 6px 20px 9 rgba(0,0,0,0.19) ",
  };
  return (
    <div style={toastCss}>
      <Toast
        className={`border text-white ${
          props.type === "success"
            ? "border-success  bg-success"
            : "border-danger  bg-danger"
        } `}
      >
        <Toast.Header
          closeButton={false}
          className={`${
            props.type === "success" ? "  bg-success" : "  bg-danger"
          }  text-white`}
        >
          <strong className="mr-auto">Επιτυχία</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default MyToast;
