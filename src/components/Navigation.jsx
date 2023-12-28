// src/components/Navigation.js
import { Link } from "react-router-dom";

import React from "react";

const Navigation = () => {
  return (
    <nav>
      <Link to="/books">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
};

export default Navigation;
