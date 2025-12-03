"use client";

import { useState } from "react";

interface RegistrationFormProps {
  onComplete: (data: FormData) => void;
}

interface FormData {
  gender: string;
  partnerGender: string;
  zipcode: string;
  password: string;
  email: string;
}

export default function RegistrationForm({ onComplete }: RegistrationFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    gender: "Man",
    partnerGender: "Woman",
    zipcode: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState<string>("");

  const validateStep = (): boolean => {
    setErrors("");

    switch (currentStep) {
      case 1:
        return !!formData.gender;
      case 2:
        return !!formData.partnerGender;
      case 3:
        if (!formData.zipcode) {
          setErrors("Please enter your zipcode");
          return false;
        }
        if (!/^\d+$/.test(formData.zipcode)) {
          setErrors("Zipcode must contain only numbers");
          return false;
        }
        return true;
      case 4:
        if (!formData.password) {
          setErrors("Please enter a password");
          return false;
        }
        if (formData.password.length < 6 || formData.password.length > 12) {
          setErrors("Password must be between 6 and 12 characters");
          return false;
        }
        return true;
      case 5:
        if (!formData.email) {
          setErrors("Please enter your email");
          return false;
        }
        const validDomains = ["@gmail.com", "@outlook.com", "@yahoo.com", "@aol.com"];
        const isValidDomain = validDomains.some(domain => formData.email.toLowerCase().endsWith(domain));
        if (!isValidDomain) {
          setErrors("Your Email is Not Valid");
          return false;
        }
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete(formData);
        window.location.href = "https://push.mobirealm.com/click";
      }
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors("");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-container">
            <h1 className="step-question">Who are you?</h1>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="checkbox"
                  name="gender"
                  value="Woman"
                  checked={formData.gender === "Woman"}
                  onChange={(e) => updateFormData("gender", e.target.value)}
                />
                <span className="radio-label">Woman</span>
              </label>
              <label className="radio-option">
                <input
                  type="checkbox"
                  name="gender"
                  value="Man"
                  checked={formData.gender === "Man"}
                  onChange={(e) => updateFormData("gender", e.target.value)}
                />
                <span className="radio-label">Man</span>
              </label>
            </div>
            <button onClick={handleNext} className="step-button">
              Start Registration
            </button>
          </div>
        );

      case 2:
        return (
          <div className="step-container">
            <h1 className="step-question">I&apos;m Looking To Meet :</h1>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="checkbox"
                  name="partnerGender"
                  value="Man"
                  checked={formData.partnerGender === "Man"}
                  onChange={(e) => updateFormData("partnerGender", e.target.value)}
                />
                <span className="radio-label">Man</span>
              </label>
              <label className="radio-option">
                <input
                  type="checkbox"
                  name="partnerGender"
                  value="Woman"
                  checked={formData.partnerGender === "Woman"}
                  onChange={(e) => updateFormData("partnerGender", e.target.value)}
                />
                <span className="radio-label">Woman</span>
              </label>
            </div>
            <button onClick={handleNext} className="step-button">
              Proceed To Do It?
            </button>
          </div>
        );

      case 3:
        return (
          <div className="step-container">
            <h1 className="step-question">where should we look?</h1>
            <input
              type="text"
              placeholder="Enter your zipcode"
              value={formData.zipcode}
              onChange={(e) => updateFormData("zipcode", e.target.value)}
              className="step-input"
            />
            {errors && <p className="error-message">{errors}</p>}
            <button onClick={handleNext} className="step-button">
              Almost There!
            </button>
          </div>
        );

      // case 4:
      //   return (
      //     <div className="step-container">
      //       <h1 className="step-question">What will your password be?</h1>
      //       <input
      //         type="password"
      //         placeholder="6-12 characters"
      //         value={formData.password}
      //         onChange={(e) => updateFormData("password", e.target.value)}
      //         className="step-input"
      //         maxLength={12}
      //       />
      //       {errors && <p className="error-message">{errors}</p>}
      //       <button onClick={handleNext} className="step-button">
      //         To The Last Question
      //       </button>
      //     </div>
      //   );

      case 4:
        return (
          <div className="step-container">
            <h1 className="step-question">We found 20+ profiles near you that match your criteria. Unlock them now.</h1>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="step-input"
            />
            {errors && <p className="error-message">{errors}</p>}
            <button onClick={handleNext} className="step-button">
              Go Get Laid!
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="registration-form">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(currentStep / 4) * 100}%` }} />
      </div>
      <div className="step-indicator">Step {currentStep} of 4</div>
      {renderStep()}

      <style jsx global>{`
        /* CRITICAL: Override Tailwind's heading reset */
        .registration-form h1.step-question,
        .registration-form h2.step-question,
        .registration-form h3.step-question {
          font-size: 23px !important;
          font-weight: 800 !important;
          color: white !important;
          margin-bottom: 25px !important;
          text-align: center !important;
          line-height: 1.2 !important;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
          display: block !important;
        }

        /* Fix radio group stacking */
        .registration-form .radio-group {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          margin: 0 auto 1rem !important;
          width: 100% !important;
          max-width: 300px !important;
          gap: 0rem !important;
        }

        .registration-form .radio-option {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          width: 100% !important;
          cursor: pointer;
          padding: 1.2rem 1.5rem !important;
          border: 3px solid rgba(255, 255, 255, 0.5) !important;
          border-radius: 12px !important;
          transition: all 0.3s ease;
          background-color: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px);
          gap: 1rem !important;
        }

        .registration-form .radio-option:not(:last-child) {
          margin-bottom: 1rem !important;
        }

        .registration-form .radio-option input[type="checkbox"] {
          appearance: none !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          width: 24px !important;
          height: 24px !important;
          border: 3px solid white !important;
          border-radius: 4px !important;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          background-color: rgba(255, 255, 255, 0.2) !important;
          flex-shrink: 0;
          margin: 0 !important;
        }

        .registration-form .radio-option input[type="checkbox"]:checked {
          background-color: #eb4a90 !important;
          border-color: #eb4a90 !important;
          box-shadow: 0 0 10px rgba(235, 74, 144, 0.6) !important;
        }

        .registration-form .radio-option input[type="checkbox"]:checked::after {
          content: "✓";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 16px;
          font-weight: bold;
        }

        .registration-form .radio-label {
          font-size: 1.3rem !important;
          font-weight: 700 !important;
          color: white !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
          text-align: left !important;
          flex-grow: 1;
        }

        /* Fix button styling */
        .registration-form button.step-button {
          background: #eb4a90 !important;
          color: white !important;
          font-weight: 800 !important;
          padding: 1rem 1rem !important;
          border: none !important;
          border-radius: 15px !important;
          font-size: 1rem !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          text-transform: uppercase !important;
          letter-spacing: 0.5px !important;
          box-shadow: 0 6px 20px rgba(235, 74, 144, 0.4) !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) !important;
          display: inline-block !important;
          min-width: 200px !important;
          margin: 0 auto !important;
          text-align: center !important;
        }

        .registration-form button.step-button:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 25px rgba(235, 74, 144, 0.6) !important;
          background: #d63d7d !important;
        }

        .registration-form button.step-button:active {
          transform: translateY(-1px) !important;
        }

        /* FIXED: Input styles with white border and placeholder */
        .registration-form input.step-input {
          width: 100% !important;
          max-width: 300px !important;
          padding: .5rem .5rem !important;
          font-size: 1.2rem !important;
          border: 2px solid white !important;
          border-radius: 10px !important;
          margin: 0 auto 1.5rem !important;
          transition: all 0.3s ease !important;
          font-family: inherit !important;
          background-color: rgba(255, 255, 255, 0.15) !important;
          color: white !important;
          font-weight: 600 !important;
          display: block !important;
          text-align: center !important;
          outline: none !important;
        }

        .registration-form input.step-input::placeholder {
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 500 !important;
          opacity: 1 !important;
        }

        .registration-form input.step-input:focus {
          outline: none !important;
          border-color: white !important;
          background-color: rgba(255, 255, 255, 0.25) !important;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3) !important;
        }

        .registration-form input.step-input:-webkit-autofill,
        .registration-form input.step-input:-webkit-autofill:hover,
        .registration-form input.step-input:-webkit-autofill:focus {
          -webkit-text-fill-color: white !important;
          -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.1) inset !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }

        .registration-form .error-message {
          color: #eb4a90 !important;
          font-size: 1rem !important;
          text-align: center !important;
          margin: 0 auto 0rem !important;
          font-weight: 600 !important;
          padding: 0.8rem !important;
          border-radius: 12px !important;
          max-width: 300px !important;
        }
      `}</style>

      <style jsx>{`
        .registration-form {
          background: linear-gradient(135deg, #1E3A8A, #3B82F6);
          padding: 3rem 2rem;
          border-radius: 25px;
          max-width: 600px;
          margin: 0 auto;
          width: 100%;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .progress-fill {
          height: 100%;
          background: #eb4a90;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(235, 74, 144, 0.5);
        }

        .step-indicator {
          text-align: center;
          color: white;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom:1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .step-container {
          animation: fadeIn 0.4s ease-in;
          text-align: center;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .error-message {
          color: white;
          font-size: 1rem;
          text-align: center;
          margin: 0 auto 1.5rem;
          font-weight: 700;
          background-color: rgba(255, 255, 255, 0.3);
          padding: 0.8rem;
          border-radius: 8px;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
          max-width: 300px;
        }

        @media (max-width: 768px) {
          .registration-form {
            padding: 2rem 1.5rem;
            border-radius: 15px;
          }

          .step-button {
            font-size: 1.1rem !important;
            padding: 1.1rem 1.5rem !important;
            min-width: 180px !important;
          }

          .step-input {
            font-size: 1.1rem !important;
            padding: 1rem 1.2rem !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .registration-form {
            padding: 1.5rem 1rem;
          }

          .step-button {
            font-size: 1rem !important;
            padding: 1rem !important;
            min-width: 160px !important;
          }
        }
      `}</style>
    </div>
  );
}