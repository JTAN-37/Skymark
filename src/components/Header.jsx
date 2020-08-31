import React from "react";

function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">Skymark</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" href="/">Home</a>
          <a className="nav-item nav-link" href="/about">About</a>
          <a className="nav-item nav-link" href="/properties">Properties</a>
          <a className="nav-item nav-link" href="/contact">Contact</a>
        </div>
      </div>
    </nav>
    );
}

export default Header;