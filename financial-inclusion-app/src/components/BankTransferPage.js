// In your src/components/BankTransferPage.js file

import React from "react";
import { Link } from "react-router-dom";
import "./BankTransferPage.css";

const BankTransferPage = () => {
  return (
    <div className="bank-transfer-container">
      <header>
        <div className="header-left">
          <Link to="/digital-payments">
            <button className="home-button">Back to Digital Payments</button>
          </Link>
        </div>
        <div className="header-right">
          <h1>Bank Transfer</h1>
        </div>
      </header>
      <main>
        <section className="payment-info">
          <p>Transfer funds securely between bank accounts.</p>
          {/* Add more information as needed */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Financial Inclusion App</p>
      </footer>
    </div>
  );
};

export default BankTransferPage;
