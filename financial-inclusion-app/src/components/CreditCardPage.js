// In your src/components/CreditCardPage.js file

import React from "react";
import { Link } from "react-router-dom";
import "./CreditCardPage.css";

const CreditCardPage = () => {
  return (
    <div className="credit-card-container">
      <header>
        <div className="header-left">
          <Link to="/digital-payments">
            <button className="home-button">Back to Digital Payments</button>
          </Link>
        </div>
        <div className="header-right">
          <h1>Credit Card Payments</h1>
        </div>
      </header>
      <main>
        <section className="payment-info">
          <p>
            Securely make transactions with your credit card. Our platform
            ensures the highest level of security for your financial
            transactions.
          </p>

          <div className="credit-card-details">
            <div className="card-image">
              {/* Include an image of a credit card */}
              <img src="/credit-card-image.png" alt="Credit Card" />
            </div>
            <div className="card-description">
              <h2>How to Use Your Credit Card</h2>
              <p>1. Insert your credit card into the card reader.</p>
              <p>2. Enter the amount and confirm the transaction.</p>
              <p>
                3. Receive a confirmation message on your registered mobile
                number.
              </p>
            </div>
          </div>

          <div className="security-tips">
            <h2>Security Tips</h2>
            <ul>
              <li>Keep your credit card details confidential.</li>
              <li>
                Regularly check your card statements for any unauthorized
                transactions.
              </li>
              <li>
                Notify your bank immediately if you lose your credit card.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Financial Inclusion App</p>
      </footer>
    </div>
  );
};

export default CreditCardPage;
