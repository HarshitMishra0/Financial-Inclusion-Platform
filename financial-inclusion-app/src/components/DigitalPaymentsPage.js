// In your src/components/DigitalPaymentsPage.js file

import React from "react";
import { Link } from "react-router-dom";
import "./DigitalPaymentsPage.css";

const DigitalPaymentsPage = () => {
  return (
    <div className="digital-payments-container">
      <header>
        <div className="header-left">
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
        </div>
        <div className="header-right">
          <h1>Digital Payment Systems</h1>
        </div>
      </header>
      <main>
        <section className="payment-options">
          <Link to="/digital-payments/credit-card" className="payment-card">
            <h2>Credit Card</h2>
            <p>Securely make transactions with your credit card.</p>
          </Link>

          <Link to="/digital-payments/debit-card" className="payment-card">
            <h2>Debit Card</h2>
            <p>
              Directly access your bank account for transactions using a debit
              card.
            </p>
          </Link>

          <Link to="/digital-payments/mobile-wallet" className="payment-card">
            <h2>Mobile Wallet</h2>
            <p>Use your mobile wallet for quick and easy payments.</p>
          </Link>

          <Link to="/digital-payments/bank-transfer" className="payment-card">
            <h2>Bank Transfer</h2>
            <p>Transfer funds securely between bank accounts.</p>
          </Link>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Financial Inclusion App</p>
      </footer>
    </div>
  );
};

export default DigitalPaymentsPage;
