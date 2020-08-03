import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link
        to="/"
        className="navbar-brand d-lg-inline-block d-none bg-info p-2 mb-0 rounded text-light h1"
      >
        Chobu Kangkolo
      </Link>
      <Link
        to="/"
        className="navbar-brand d-inline-block d-lg-none bg-info p-2 mb-0 rounded text-light h1"
      >
        CK
      </Link>
    </div>
  );
}
