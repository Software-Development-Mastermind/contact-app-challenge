import React, { Component } from "react";
import "./App.css";
import NewContactForm from "./NewContactForm";
import ContactsTable from "./ContactsTable";

class App extends Component {
  state = {
    contacts: [
      {
        firstName: "Andy",
        lastName: "Sterkowitz",
        phone: "5551234567",
        email: "andy@email.com",
        addressLine1: "123 Main St.",
        addressLine2: "Apt 1",
        city: "Chicago",
        state: "Illinois",
        country: "USA",
        notes: "None!"
      },
    ],
    form: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      country: "",
      notes: ""
    }
  };
  
  updateName = (value) => {
    // creates a "deep clone" aka copy of this.state.form object
    const formCopy = Object.assign({}, this.state.form);

    // updates the name property of the "deep clone"
    formCopy.name = value;

    // updates this.state.form to be the "deep clone"
    this.setState({
      form: formCopy
    })
  }

  render() {
    // do not remove this!
    console.log('current value of name <input>: ', this.state.form.name);
    return (
      <div className="container">
        <h1 className="my-4">Contact Tracker!</h1>
        <div>
          <NewContactForm />
        </div>
        <div>
          <ContactsTable contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;
