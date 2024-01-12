import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DebitCardPage.css";

const DebitCardPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardNumber":
        setCardNumber(value);
        break;
      case "expiryDate":
        setExpiryDate(value);
        break;
      case "cvv":
        setCVV(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="debit-card-container">
      <header>
        <div className="header-left">
          <Link to="/digital-payments">
            <button className="home-button">Back to Digital Payments</button>
          </Link>
        </div>
        <div className="header-right">
          <h1>Debit Card Payments</h1>
        </div>
      </header>
      <main>
        <section className="payment-info">
          <p>
            Directly access your bank account for transactions using a debit
            card.
          </p>
          {/* Debit card form */}
          <form>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={cardNumber}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Expiry Date:
              <input
                type="text"
                name="expiryDate"
                value={expiryDate}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={cvv}
                onChange={handleInputChange}
              />
            </label>
            <br />
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Financial Inclusion App</p>
      </footer>
    </div>
  );
};

export default DebitCardPage;
