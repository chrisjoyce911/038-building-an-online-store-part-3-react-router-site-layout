import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="layout top-bar">
      <div className="wrapper">
        <div className="section">My store</div>
        <div className="section">
          <Link to="/">Products</Link> | <Link to="/view-cart">View Cart</Link>
        </div>
      </div>
    </div>
  );
}
