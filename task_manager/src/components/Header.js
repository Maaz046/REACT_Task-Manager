import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { title } = props;
  return (
    // <div>
    //   <h1>{title}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-light py-3 mb-3">
      <div className="container">
        <div className="row">
          <a href="/" className="navbar-title">
            {title}
          </a>
        </div>
        <div className="row">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <a href="/" className="navLink">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <i
            className="fa fa-plus"
            style={{ color: "green", float: "right", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: "First React App"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
