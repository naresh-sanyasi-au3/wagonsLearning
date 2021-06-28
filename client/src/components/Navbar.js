import React, { useRef } from "react";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const {searchHandler, term} = props;

  const inputEl = useRef("");
  const searchInput = () => {
    console.log(inputEl.current.value)
    searchHandler(inputEl.current.value); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container container-fluid">
          <Link className="navbar-brand" to="/">
            Wagonslearning
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
             ref={inputEl}
              className="form-control search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={term}
              onChange={searchInput}
            />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
