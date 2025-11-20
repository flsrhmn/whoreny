// src/app/escort-full/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function EscortFullPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleJoinFree = () => {
    window.location.href = 'https://push.mobirealm.com/click';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="main-content">
        {/* Background Video/Image */}
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="background-video"
            poster="/escort/gif1.mp4"
          >
            <source src="/escort/gif1.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          
          {/* Logo - Top Left for Desktop, Center for Mobile */}
          <div className={`logo-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <h1 className="logo-text">ITSJUSTSEX</h1>
          </div>

          {/* Banner Content */}
          <div className={`banner-content ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="banner-text">
              <h1 className="main-heading">The Alternative to Escorts</h1>
              <div className="divider"></div>
              <p className="sub-heading">Meet a Hot Sugar Baby Today</p>
            </div>

            {/* CTA Section */}
            <footer className="cta-section">
              <button
                onClick={handleJoinFree}
                className="join-button"
              >
                Join Free
              </button>
              <p className="login-prompt">
                Already a member? <a href="/escort-full/login" className="login-link">Log in</a>.
              </p>
            </footer>
          </div>
        </div>
      </main>

      <style jsx>{`
        .min-h-screen {
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          position: relative;
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
        }

        /* Logo Styles */
        .logo-container.desktop {
          position: absolute;
          top: 2rem;
          left: 2rem;
          z-index: 10;
        }

        .logo-container.mobile {
          position: absolute;
          top: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          text-align: center;
        }

        .logo-text {
          color: white;
          font-size: 1.8rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        /* Banner Content Styles */
        .banner-content.desktop {
          position: absolute;
          top: 50%;
          left: 2rem;
          transform: translateY(-50%);
          z-index: 10;
          text-align: left;
          max-width: 500px;
        }

        .banner-content.mobile {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          text-align: center;
          width: 90%;
          max-width: 400px;
        }

        .banner-text {
          margin-bottom: 2rem;
        }

        .main-heading {
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0 0 1.5rem 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
          line-height: 1.2;
        }

        .divider {
          width: 80px;
          height: 3px;
          background: white;
          margin: 1.5rem 0;
          border-radius: 2px;
        }

        .banner-content.mobile .divider {
          margin: 1.5rem auto;
        }

        .sub-heading {
          color: white;
          font-size: 1.3rem;
          margin: 0;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
          line-height: 1.4;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
        }

        .join-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: bold;
          padding: 0.8rem 3rem;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          min-width: 200px;
        }

        .join-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .login-prompt {
          color: white;
          font-size: 0.9rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
          margin: 0;
        }

        .login-link {
          color: #ffd700;
          text-decoration: none;
          font-weight: 600;
        }

        .login-link:hover {
          text-decoration: underline;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.5rem;
            letter-spacing: 2px;
          }

          .main-heading {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .sub-heading {
            font-size: 1.1rem;
          }

          .divider {
            width: 60px;
            margin: 1rem auto;
          }

          .join-button {
            padding: 0.7rem 2.5rem;
            font-size: 1rem;
            min-width: 180px;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            font-size: 1.3rem;
          }

          .main-heading {
            font-size: 1.7rem;
          }

          .sub-heading {
            font-size: 1rem;
          }

          .banner-content.mobile {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
}