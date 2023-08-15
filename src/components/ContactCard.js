import React from "react";

const CardContact = (props) => {
  const { name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
};

// Set a default value for the contact prop
CardContact.defaultProps = {
  contact: {
    name: "Aditya ",
    email: "adityasrj@engineer.com",
  },
};

export default CardContact;
