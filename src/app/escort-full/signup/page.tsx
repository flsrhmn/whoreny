// src/app/escort-full/signup/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Email validation
    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = "Please enter a valid email address";
    }

    // Username validation
    if (formData.username.length < 6) {
      newErrors.username = "Username must be at least 6 characters";
    } else if (formData.username.length > 15) {
      newErrors.username = "Username must be less than 15 characters";
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      // Redirect to Google on successful signup
      window.location.href = 'https://google.com';
    } else {
      setErrors(formErrors);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="signup-page">
      {/* Terms Modal */}
      {showTerms && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setShowTerms(false)}
            >
              ×
            </button>
            <h2>Terms and Conditions</h2>
            <div className="modal-body">        
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing and using Whoreny, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h3>2. Use License</h3>
              <p>Permission is granted to temporarily use Whoreny for personal, non-commercial transitory viewing only.</p>
              
              <h3>3. User Account</h3>
              <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>
              
              <h3>4. Content Responsibility</h3>
              <p>You understand that all content posted by you is your sole responsibility and that you will indemnify us for any claims resulting from your content.</p>
              
              <h3>5. Termination</h3>
              <p>We may terminate or suspend access to our service immediately, without prior notice, for any reason whatsoever.</p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setShowPrivacy(false)}
            >
              ×
            </button>
            <h2>Privacy Policy</h2>
            <div className="modal-body">
              <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
              
              <h3>1. Information We Collect</h3>
              <p>We collect information you provide directly to us, such as when you create an account, update your profile, or use our services.</p>
              
              <h3>2. How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.</p>
              
              <h3>3. Information Sharing</h3>
              <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
              
              <h3>4. Data Security</h3>
              <p>We implement appropriate technical and organizational security measures to protect your personal information.</p>
              
              <h3>5. Your Rights</h3>
              <p>You have the right to access, correct, or delete your personal information at any time through your account settings.</p>
              
              <h3>6. Cookies</h3>
              <p>We use cookies and similar technologies to track activity and hold certain information to improve user experience.</p>
            </div>
          </div>
        </div>
      )}

      <div className="signup-container">
        <div className="form-box">
          {/* Logo */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
          <div className="logo-section">
            <Image 
              src={isMobile ? "/logo-mob.png" : "/logo-desk.png"} 
              alt="Whoreny Logo" 
              width={isMobile ? 200 : 300}
              height={isMobile ? 50 : 75}
              className="logo-image"
            />
          </div>
          </div>

          <form className="form-content" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="input-group">
              <input
                id="email"
                name="email"
                type="email"
                required
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>

            {/* Username Input */}
            <div className="input-group">
              <input
                id="username"
                name="username"
                type="text"
                required
                className={`form-input ${errors.username ? 'error' : ''}`}
                placeholder="Username (6-15 characters)"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <div className="error-text">{errors.username}</div>}
            </div>

            {/* Password Input */}
            <div className="input-group">
              <input
                id="password"
                name="password"
                type="password"
                required
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="error-text">{errors.password}</div>}
            </div>

            {/* Confirm Password Input */}
            <div className="input-group">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="signup-btn">
              Sign Up
            </button>

            {/* Terms Text */}
            <div className="terms-text">
              By clicking &apos;Sign Up&apos; I certify that I&apos;m at least 18 years old and agree to the{" "}
              <button 
                className="link-btn" 
                onClick={() => setShowPrivacy(true)}
              >
                Whoreny Privacy Policy
              </button>{" "}
              and{" "}
              <button 
                className="link-btn" 
                onClick={() => setShowTerms(true)}
              >
                Terms
              </button>.
            </div>
          </form>

          {/* Footer */}
          <div className="form-footer">
            <p className="footer-text">
              © {currentYear} Whoreny
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signup-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          padding: 1rem;
          position: relative;
        }

        .signup-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 400px;
        }

        .form-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          color: white;
        }

        .logo-section {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .logo-image {
          margin: 0 auto;
        }

        .form-content {
          space-y-6;
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .form-input:focus {
          outline: none;
          border-color: white;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .form-input.error {
          border-color: #fed7d7;
          background: rgba(254, 215, 215, 0.3);
        }

        .error-text {
          color: #fed7d7;
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }

        .signup-btn {
          width: 100%;
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }

        .signup-btn:hover {
          background: #f8fafc;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
        }

        .terms-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.75rem;
          text-align: center;
          line-height: 1.4;
          margin-top: 1rem;
        }

        .link-btn {
          background: none;
          border: none;
          color: white;
          text-decoration: underline;
          cursor: pointer;
          font-size: 0.75rem;
          padding: 0;
        }

        .link-btn:hover {
          color: #f8fafc;
        }

        .form-footer {
          margin-top: 2rem;
          text-align: center;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.75rem;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          max-width: 600px;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
          color: #333;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #666;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .close-btn:hover {
          background: #f1f1f1;
          color: #333;
        }

        .modal-content h2 {
          color: #667eea;
          margin-bottom: 1.5rem;
          padding-right: 3rem;
        }

        .modal-body {
          line-height: 1.6;
        }

        .modal-body h3 {
          color: #764ba2;
          margin: 1.5rem 0 0.5rem 0;
          font-size: 1.1rem;
        }

        .modal-body p {
          margin-bottom: 1rem;
          color: #555;
        }

        @media (max-width: 768px) {
          .form-box {
            padding: 2rem 1.5rem;
            margin: 1rem;
          }

          .modal-content {
            padding: 1.5rem;
            margin: 1rem;
          }

          .modal-content h2 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
}