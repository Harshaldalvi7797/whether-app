import React from "react";

const Whether = props => {
  console.log(props);
  return (
    <div className="container ">
      <div className="card text-left pt-4">
        <h1 className="text-white">
          {props.city} {props.country}
        </h1>
        <div className="card-body">
          <h5 className="py-4">
            <i className={`wi ${props.whethericon} display-1`}></i>
          </h5>
          {props.celsius ? (
            <h1 className="py-2">{props.celsius}&deg;</h1>
          ) : null}
          {minmaxTemp(props.temp_min, props.temp_max)}
          {/* <h4 className="py-2">slow rain</h4>
          <h3>{props.description}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Whether;
function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
