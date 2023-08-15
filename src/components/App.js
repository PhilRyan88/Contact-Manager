import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const contacts = [
    {
      id: "1",
      name: "Aditya",
      email: "adityasrj@engineer.com",
    },
    {
      id: "2",
      name: "Phil Ryan",
      email: "philryan@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <h1>Hello</h1>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}
export default App;
