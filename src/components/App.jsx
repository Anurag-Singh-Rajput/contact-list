import React from "react";
import Contact from "../contacts";
import Card from "./Card";

function createCard(contact){
  return <Card 
    key = {contact.id}
    sNo = {contact.id}
    name = {contact.name}
    img = {contact.imgURL}
    phone = {contact.phone}
    email = {contact.email}
  />
}

function App() {
  return (
<div> 
    <h1 className="heading">Contacts</h1>
    {Contact.map(createCard)} 
    {/* calling function in a function */}
    </div>
  );
} 

export default App;
