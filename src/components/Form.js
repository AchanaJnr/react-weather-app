import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
  <p className="subtitle">Get Information On The Weather And More...</p>
  <div className="field-group">
  <input type="text" name="city" placeholder="City..." />
  </div>
  <div className="field-group">
  <input type="text" name="country" placeholder="Country..."/>
  </div>
  <button>Get Weather</button>
  </form>
);

export default Form;
