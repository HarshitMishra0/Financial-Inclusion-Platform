// In your src/components/PaymentMethodPage.js file

import React from "react";
import { Link, useParams } from "react-router-dom";
import "./PaymentMethodPage.css"; // Updated import statement

const PaymentMethodPage = () => {
  const { method } = useParams();

  return (
    <div className="payment-method-container">
      <header>
        <div className="header-left">
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
        </div>
        <div className="header-right">
          <h1>{capitalizeFirstLetter(method)} Payments</h1>
        </div>
      </header>
      <main>
        <section className="payment-info">
          <p>
            This page provides information and options for {method} payments.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Financial Inclusion App</p>
      </footer>
    </div>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default PaymentMethodPage;
