import React from "react";

const Whether = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="card text-left">
        <h1>
          {props.city} ,{props.country}
        </h1>
        <div className="card-body">
          <h5 className="py-4">
            <i className={`wi ${props.whethericon} display-1`}></i>
          </h5>
          <h1 className="py-2">25&deg;{props.temp_max}</h1>
          {minmaxTemp(25, 18)}
          <h4 className="py-2">slow rain</h4>
          <h3>{props.description}</h3>
        </div>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  );
}
export default Whether;
