// src/app/escort-full/page.tsx
"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function EscortFullContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const searchParams = useSearchParams();
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check URL parameters for header and banner
  useEffect(() => {
    const headerParam = searchParams.get('header');
    const bannerParam = searchParams.get('banner');
    
    setShowHeader(headerParam === 'yes');
    setShowBanner(bannerParam === 'yes');
  }, [searchParams]);

  // Idle redirect after 30 seconds
  useEffect(() => {
    const resetIdleTimer = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      
      idleTimerRef.current = setTimeout(() => {
        window.open('https://push.mobirealm.com/3abf5600-d599-423a-b330-b5ba33b5df56?ads=ads&creative=escort-full&domain=whoerny&source=whoerny&subsource=escort-full&Sourceid=025 ', '_blank');
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
    window.history.pushState({ page: 'escort-full' }, '', window.location.href);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

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
      {/* Header with text links - conditionally rendered */}
      {showHeader && (
        <header className="header">
          <div className="header-content">
            <nav className="header-nav">
              <a href="https://push.mobirealm.com/93ac51fa-3abe-4861-a6bb-2dde380e2256?subid={sub.id}&adzone={adzone}&site={site}&campaign={campaign}&banner={banner}&email={email}&Sourceid=027&cost={cost}&conversion={conversion}" className="nav-link" target="_blank" rel="noopener noreferrer">Tiktok Girls</a>
              <a href="https://push.mobirealm.com/0ba7ea6b-d362-4703-a32f-2616b3bb7461?subid={sub.id}&adzone={adzone}&site={site}&campaign={campaign}&banner={banner}&email={email}&Sourceid=027&cost={cost}&conversion={conversion}
" className="nav-link" target="_blank" rel="noopener noreferrer">Adult Games</a>
            </nav>
          </div>
        </header>
      )}

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
            <h1 className="logo-text">WHORENY</h1>
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

      {/* Banner space at bottom - conditionally rendered */}
      {showBanner && (
        <footer className="banner-section">
          <div className="banner-space">
            <p>Banner Space Available</p>
          </div>
          
          <div className="footer-content">
            <p className="footer-disclaimer">
              © 2025 ItsJustSex.org, All rights reserved. Disclaimer: This website
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
          position: relative;
          z-index: 20;
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

        /* Banner Section */
        .banner-section {
          background-color: #f8f8f8;
          border-top: 1px solid #e0e0e0;
          position: relative;
          z-index: 20;
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

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .header-nav {
            gap: 1rem;
          }
          
          .nav-link {
            font-size: 0.8rem;
          }

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

          .footer-content {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0 1rem;
          }
          
          .header-nav {
            gap: 0.5rem;
          }

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

          .banner-space {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default function EscortFullPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <EscortFullContent />
    </Suspense>
  );
}