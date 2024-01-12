import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DigitalPaymentsPage from "./components/DigitalPaymentsPage";
import CreditCardPage from "./components/CreditCardPage";
import MobileWalletPage from "./components/MobileWalletPage";
import DebitCardPage from "./components/DebitCardPage"; // Import the DebitCardPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/digital-payments" element={<DigitalPaymentsPage />} />
        <Route
          path="/digital-payments/credit-card"
          element={<CreditCardPage />}
        />
        <Route
          path="/digital-payments/debit-card"
          element={<DebitCardPage />}
        />{" "}
        {/* Add the route for DebitCardPage */}
        <Route
          path="/digital-payments/mobile-wallet"
          element={<MobileWalletPage />}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
