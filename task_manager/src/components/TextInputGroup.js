import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  //These are props
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      {/* <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        placeholder="Enter task..."
        value={title}
        onChange={this.onChange}
      /> */}
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        //We need conditional classnames, So in case we have an error in the text field we need to add the 'is-invalid'
        //class to the error div below.  For this we use the module 'classnames'.
        //form-control is the default class and the second argument in curly braces is the conditional class and the condition in which the class will be applied
        className={classnames("form-control", { "is-invalid": error })} //This is classnames syntax
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {<div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
