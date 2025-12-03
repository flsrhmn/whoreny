"use client";

import { useState } from "react";

interface AgePopupProps {
  onConfirm: () => void;
}

export default function AgePopup({ onConfirm }: AgePopupProps) {
  const [selectedAge, setSelectedAge] = useState<string>("");

  const handleConfirm = () => {
    if (selectedAge) {
      localStorage.setItem("userAge", selectedAge);
      onConfirm();
    }
  };

  // Generate age options from 18 to 80
  const ageOptions = Array.from({ length: 63 }, (_, i) => i + 18);

  return (
    <div className="age-popup-overlay">
      <div className="age-popup-container">
        <h1 className="age-popup-title">ADULTS ONLY!</h1>
        <p className="age-popup-description">
          You must be 18+ to join and enjoy real casual sex connections.
        </p>
        <p className="age-popup-description">
          Confirm your age below to continue.
        </p>

        <div className="age-popup-select-wrapper">
          <select
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
            className="age-popup-select"
          >
            <option value="">Select your age</option>
            {ageOptions.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!selectedAge}
          className={`age-popup-button ${!selectedAge ? 'disabled' : ''}`}
        >
          Confirm
        </button>
      </div>

      <style jsx>{`
        .age-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(5px);
        }

        .age-popup-container {
          background: linear-gradient(135deg, #1E3A8A, #3B82F6);
          padding: 3rem 2.5rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          max-width: 500px;
          width: 90%;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .age-popup-title {
          color: #fff;
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          text-align: center;
        }

        .age-popup-description {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          line-height: 1.6;
          font-weight: 500;
          text-align: center;
        }

        .age-popup-select-wrapper {
          margin: 2rem 0;
        }

        .age-popup-select {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.95);
          color: #333;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .age-popup-select:hover {
          border-color: rgba(255, 255, 255, 0.6);
          background-color: #fff;
        }

        .age-popup-select:focus {
          outline: none;
          border-color: #fff;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
        }

        .age-popup-button {
          background: #eb4a90;
          color: white;
          font-weight: 700;
          padding: 1rem 3rem;
          border: none;
          border-radius: 50px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 2px;
          box-shadow: 0 4px 15px rgba(235, 74, 144, 0.4);
          margin-top: 1rem;
          width: 100%;
        }

        .age-popup-button:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(235, 74, 144, 0.6);
          background: #d63d7d;
        }

        .age-popup-button:active:not(.disabled) {
          transform: translateY(0);
        }

        .age-popup-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #999;
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .age-popup-container {
            padding: 2rem 1.5rem;
          }

          .age-popup-title {
            font-size: 2rem;
          }

          .age-popup-description {
            font-size: 1rem;
          }

          .age-popup-button {
            padding: 0.9rem 2.5rem;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
}
