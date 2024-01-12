// In your src/components/MobileWalletPage.js file

import React from "react";
import { Link } from "react-router-dom";
import "./MobileWalletPage.css";

const MobileWalletPage = () => {
  return (
    <div className="mobile-wallet-container">
      <header>
        <div className="header-left">
          <Link to="/digital-payments">
            <button className="home-button">Back to Digital Payments</button>
          </Link>
        </div>
        <div className="header-right">
          <h1>Mobile Wallet Payments</h1>
        </div>
      </header>
      <main>
        <section className="payment-info">
          <p>
            Make payments seamlessly with your mobile wallet. Enjoy the
            convenience of quick transactions on the go.
          </p>

          <div className="wallet-details">
            <div className="wallet-image">
              {/* Include an image of a mobile wallet */}
              <img src="/mobile-wallet-image.png" alt="Mobile Wallet" />
            </div>
            <div className="wallet-description">
              <h2>How to Use Your Mobile Wallet</h2>
              <p>1. Open your mobile wallet application.</p>
              <p>
                2. Scan the merchant's QR code or enter the payment details.
              </p>
              <p>
                3. Confirm the transaction with your secure PIN or fingerprint.
              </p>
            </div>
          </div>

          <div className="benefits">
            <h2>Benefits of Mobile Wallets</h2>
            <ul>
              <li>Quick and convenient payments.</li>
              <li>Secure transactions with advanced encryption.</li>
              <li>Access to exclusive discounts and rewards.</li>
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

export default MobileWalletPage;
