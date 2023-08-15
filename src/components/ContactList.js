import React from "react";
import CardContact from "./ContactCard";
const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <CardContact />;
  });
  return (
    <div className="ui celled list">
      Contact List
      {renderContactList}
    </div>
  );
};
export default ContactList;
