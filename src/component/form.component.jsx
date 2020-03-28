import React from "react";
import "./form.style.css";

const Forml = props => {
  return (
    <div className="container">
      <form onSubmit={props.loadwhether}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="city"
                name="city"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="country"
                name="country"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <button className="btn btn-warning">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      plese enter city or country
    </div>
  );
};
export default Forml;
