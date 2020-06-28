import React, { Component } from "react";

class ContactsTable extends Component {
  render() {
    const tableRows = [];

    for (let i = 0; i < this.props.contacts.length; i++) {
      const row = (
        <tr>
          <td>
            {this.props.contacts[i].firstName +
              " " +
              this.props.contacts[i].lastName}
          </td>
          <td>{this.props.contacts[i].phone}</td>
          <td>{this.props.contacts[i].email}</td>
          <td>
            {this.props.contacts[i].addressLine1 +
              ", " +
              this.props.contacts[i].addressLine2}
          </td>
          <td>
            {this.props.contacts[i].city + ", " + this.props.contacts[i].state}
          </td>
          <td>{this.props.contacts[i].country}</td>
          <td>{this.props.contacts[i].notes}</td>
        </tr>
      );

      tableRows.push(row);
    }

    return (
      <table className="table table-bordered mt-5">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>City/State</th>
            <th>Country</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }
}

export default ContactsTable;