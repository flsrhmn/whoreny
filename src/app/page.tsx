// src/app/escort-side/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function EscortSidePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const searchParams = useSearchParams();

  // Check URL parameters for header and banner
  useEffect(() => {
    const headerParam = searchParams.get('header');
    const bannerParam = searchParams.get('banner');
    
    setShowHeader(headerParam === 'yes');
    setShowBanner(bannerParam === 'yes');
  }, [searchParams]);

  // Check if device is mobile and set appropriate background
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (mobile) {
        setBackgroundImage(`/escort/img1.jpg`);
      } else {
        setBackgroundImage("/escort/img-its1.jpg");
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Idle redirect after 30 seconds
  useEffect(() => {
    const resetIdleTimer = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      
      idleTimerRef.current = setTimeout(() => {
        window.open('https://push.mobirealm.com/3abf5600-d599-423a-b330-b5ba33b5df56?ads=ads&creative=default&domain=whoerny&source=whoerny&subsource=default-page&Sourceid=025 ', '_blank');
      }, 30000);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      document.addEventListener(event, resetIdleTimer);
    });

    resetIdleTimer();

    return () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      events.forEach(event => {
        document.removeEventListener(event, resetIdleTimer);
      });
    };
  }, []);

  // Back button handling
  useEffect(() => {
    const handlePopState = () => {
      window.location.href = 'https://push.mobirealm.com/250f31d4-e371-41a4-bf89-f534726eea27?source={source}&s1={subid}&s2={subid2}&s3={subid3}&email={email}&sourceid=026&cost={cost}&clickid={click_id}';
    };

    window.addEventListener('popstate', handlePopState);
    window.history.pushState({ page: 'escort-side' }, '', window.location.href);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleButtonClick = () => {
    window.open('https://push.mobirealm.com/click', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with text links - conditionally rendered */}
      {showHeader && (
        <header className="header">
          <div className="header-content">
            <nav className="header-nav">
              <a href="https://push.mobirealm.com/93ac51fa-3abe-4861-a6bb-2dde380e2256?subid={sub.id}&adzone={adzone}&site={site}&campaign={campaign}&banner={banner}&email={email}&Sourceid=027&cost={cost}&conversion={conversion}
" className="nav-link" target="_blank" rel="noopener noreferrer">Tiktok Girls</a>
              <a href="https://push.mobirealm.com/0ba7ea6b-d362-4703-a32f-2616b3bb7461?subid={sub.id}&adzone={adzone}&site={site}&campaign={campaign}&banner={banner}&email={email}&Sourceid=027&cost={cost}&conversion={conversion}
" className="nav-link" target="_blank" rel="noopener noreferrer">Adult Games</a>
            </nav>
          </div>
        </header>
      )}

      <main className="main-content">
        {isMobile ? (
          // Mobile layout: image on top, content below
          <div className="mobile-layout">
            <div className="image-section">
              <div 
                className="background-image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
            </div>
            <div className="content-section">
              <div className="text-content">
                <h1 className="brand-name">WHORENY</h1>
                <h2 className="tagline">The Alternative to Escorts.</h2>
                <p className="description">Find the Perfect match Under the Radar</p>
                
                <button
                  onClick={handleButtonClick}
                  className="cta-button"
                >
                  FREE SIGNUP
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Desktop/Tablet layout: side by side
          <div className="desktop-layout">
            <div className="left-section">
              <div className="text-content">
                <h1 className="brand-name">WHORENY</h1>
                <h2 className="tagline">The Alternative to Escorts.</h2>
                <p className="description">Find the Perfect match Under the Radar</p>
                
                <button
                  onClick={handleButtonClick}
                  className="cta-button"
                >
                  FREE SIGNUP
                </button>
              </div>
            </div>
            <div className="right-section">
              <div 
                className="background-image"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
            </div>
          </div>
        )}
      </main>

      {/* Banner space at bottom - conditionally rendered */}
      {showBanner && (
        <footer className="banner-section">
          <div className="banner-space">
            <p>Banner Space Available</p>
          </div>
          
          <div className="footer-content">
            <p className="footer-disclaimer">
              © 2025 Whoreny.com, All rights reserved. Disclaimer: This website
              contains adult material. All members and persons appearing on this
              site have contractually represented to us that they are 18 years of
              age or older. 18 U.S.C. 2257 Record Keeping Requirements Compliance
              Statement.
            </p>
          </div>
        </footer>
      )}

      <style jsx>{`
        .min-h-screen {
          min-height: 100vh;
        }
        
        .flex-col {
          display: flex;
          flex-direction: column;
        }

        /* Header Styles */
        .header {
          background-color: #000;
          padding: 1rem 0;
          border-bottom: 1px solid #333;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .header-nav {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #ccc;
        }

        /* Main Content Styles */
        .main-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Desktop Layout */
        .desktop-layout {
          display: flex;
          width: 100%;
          min-height: 80vh;
        }

        .left-section {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          padding: 2rem;
        }

        .right-section {
          flex: 1;
          position: relative;
        }

        /* Mobile Layout */
        .mobile-layout {
          width: 100%;
        }

        .image-section {
          width: 100%;
          height: 50vh;
          position: relative;
        }

        .content-section {
          padding: 2rem;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
        }

        /* Text Content */
        .text-content {
          text-align: center;
          max-width: 500px;
          width: 100%;
        }

        .brand-name {
          font-size: 3rem;
          font-weight: bold;
          color: #000;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .tagline {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .description {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        /* CTA Button */
        .cta-button {
          background-color: #eb4a90;
          color: white;
          font-weight: bold;
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button:hover {
          background-color: #d43a80;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(235, 74, 144, 0.3);
        }

        /* Background Image */
        .background-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Banner Section */
        .banner-section {
          background-color: #f8f8f8;
          border-top: 1px solid #e0e0e0;
        }

        .banner-space {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          color: #666;
          border-bottom: 1px solid #e0e0e0;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .footer-disclaimer {
          color: #666;
          font-size: 0.75rem;
          line-height: 1.4;
          text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-nav {
            gap: 1rem;
          }
          
          .nav-link {
            font-size: 0.8rem;
          }
          
          .brand-name {
            font-size: 2rem;
          }
          
          .tagline {
            font-size: 1.2rem;
          }
          
          .description {
            font-size: 1rem;
          }
          
          .image-section {
            height: 40vh;
          }
          
          .content-section {
            padding: 1.5rem;
            min-height: 60vh;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0 1rem;
          }
          
          .header-nav {
            gap: 0.5rem;
          }
          
          .content-section {
            padding: 1rem;
          }
          
          .brand-name {
            font-size: 1.8rem;
          }
          
          .footer-content {
            padding: 1rem;
          }
          
          .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}