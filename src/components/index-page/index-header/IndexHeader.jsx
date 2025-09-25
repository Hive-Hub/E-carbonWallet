import React from 'react';
import './IndexHeader.css';

export default function IndexHeader() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo Section */}
          <div className="logo-section">
            <svg className="logo-icon" fill="none" viewBox="0 0 48 48">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0.757L47.243 24 24 47.243 0.757 24 24 0.757ZM21 35.757V12.243L9.243 24 21 35.757Z"
              />
            </svg>
            <h2 className="logo-text">Ecotrack</h2>
          </div>

          {/* Navigation */}
          <nav className="navigation">
            {["Home", "Features", "Rewards", "About Us"].map((item) => (
              <a
                key={item}
                href="#"
                className="nav-link"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions Section */}
          <div className="actions">
            <a
              href="#"
              className="login-link"
            >
              Already an Eco-Warrior? Login Here
            </a>
            <button className="primary-button">
              Join the Green Movement: Sign Up Now
            </button>
            <button className="mobile-menu-button">
              <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
