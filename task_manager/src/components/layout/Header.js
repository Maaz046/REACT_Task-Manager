import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { title } = props;
  return (
    // <div>
    //   <h1>{title}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark py-3 mb-3">
      <div className="container">
        <a href="/" className="navbar-title">
          {title}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* Better to use Link rather than a tag */}
              <Link to="/" className="nav-link">
                <i className="fa fa-home" />
                Home
              </Link>
              {/* <a href="/" className="navLink">
                Home
              </a> */}
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fa fa-question" />
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/task/add" className="nav-link">
                <i
                  className="fa fa-plus"
                  style={{ color: "green", cursor: "pointer" }}
                ></i>
              </Link>
            </li>
          </ul>
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
