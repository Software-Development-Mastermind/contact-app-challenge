import React, { Component } from "react";

class NewContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="pb-5">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" name="firstName" type="text" className="form-control" onChange={(e) => this.props.changeName(e.target.value)} />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label>Last Name</label>
              <input id="last-name"  name="lastName" type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>Email</label>
              <input id="email"  name="email" type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label>Phone Number</label>
              <input id="phone"  name="phone" type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="form-group">
              <label>Address Line 1</label>
              <input id="address-line-1"  name="addressLine1" type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md">
            <div className="form-group">
              <label>Address Line 2</label>
              <input id="address-line-2"  name="addressLine2" type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>City</label>
              <input id="city"  name="city" type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label>State</label>
              <input id="state"  name="state" type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input id="country"  name="country" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <input id="notes"  name="notes" type="textarea" className="form-control" />
        </div>
        <button className="btn btn-lg btn-primary float-right" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NewContactForm;
