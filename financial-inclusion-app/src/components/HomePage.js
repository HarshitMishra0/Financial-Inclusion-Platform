// In your src/components/HomePage.js file

import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <div className="header-left">
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
        </div>
        <div className="header-right">
          <h1>Financial Inclusion App</h1>
        </div>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to Our Financial Inclusion Platform</h2>
          <p>
            Explore digital payment systems, budgeting tools, and enhance your
            financial literacy with us.
          </p>
        </section>

        <section className="features">
          <div className="feature">
            <Link to="/digital-payments">Digital Payment Systems</Link>
            <p>
              Make secure and convenient transactions using our digital payment
              solutions.
            </p>
          </div>

          <div className="feature">
            <h2>Budgeting Tools</h2>
            <p>
              Take control of your finances with our budgeting tools to manage
              expenses and savings.
            </p>
          </div>

          <div className="feature">
            <h2>Financial Literacy</h2>
            <p>
              Learn about financial concepts and strategies to improve your
              financial well-being.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Financial Inclusion App</p>
      </footer>
    </div>
  );
};

export default HomePage;
