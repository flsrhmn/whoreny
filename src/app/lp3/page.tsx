"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Create a separate component for the content that uses useSearchParams
function EscortSideContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const searchParams = useSearchParams();
  const bannerLoadedRef = useRef(false);

  const [currentContent] = useState({
    tagline: "Where Good Girls Come to Be Bad.",
    description: "Where Whores and the Horny Finally Meet",
    buttonText: "JOIN FREE",
    buttonColor: "#eb4a90",
    imageNumber: 0
  });

  // Check URL parameters for header and banner
  useEffect(() => {
    const headerParam = searchParams.get('header');
    const bannerParam = searchParams.get('banner');
    
    setShowHeader(headerParam === 'yes');
    setShowBanner(bannerParam === 'yes');
  }, [searchParams]);

  // Load the ad script when showBanner becomes true
  useEffect(() => {
    if (showBanner) {
      const script = document.createElement('script');
      script.src = '//adzone.adveroi.com/delivery/asyncjs.php';
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        // Cleanup: remove the script when component unmounts or showBanner changes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [showBanner]);

  // Rest of your existing code remains the same...
  // Check if device is mobile and set appropriate background
  useEffect(() => {
  const checkIfMobile = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // Generate random number between 1 and 50
    const randomImageNumber = Math.floor(Math.random() * 33) + 1;

    if (mobile) {
      setBackgroundImage(`/escort/mob/img${randomImageNumber}.jpg`);
    } else {
      setBackgroundImage(`/escort/desk/img${randomImageNumber}.jpg`);
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
      // Only proceed if content is loaded
      if (!currentContent.tagline || !currentContent.buttonColor) {
        console.log('Content not loaded for idle redirect');
        return;
      }

      // Construct URL with current content as parameters
      const baseUrl = 'https://push.mobirealm.com/3abf5600-d599-423a-b330-b5ba33b5df56';
      const params = new URLSearchParams({
        sub1:"lp1",
        ads: currentContent.tagline,
        creative: currentContent.description,
        domain: `img${currentContent.imageNumber}.jpg`,
        source: currentContent.buttonText,
      });

      const finalidle = `${baseUrl}?${params.toString()}&subsource=${currentContent.buttonColor}&Sourceid=025&clickid={click_id}`;
      window.open(finalidle);
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
}, [currentContent]);

  // Back button handling
  const handleBackButton = () => {
    // Construct URL with current content as parameters
    const baseUrl = 'https://push.mobirealm.com/250f31d4-e371-41a4-bf89-f534726eea27';
    const params = new URLSearchParams({
      source: currentContent.tagline,
      s1: currentContent.description,
      s2: `img${currentContent.imageNumber}.jpg`,
      s3: currentContent.buttonText,
      email:"lp1"
    });

    const finalUrlBackButton = `${baseUrl}?${params.toString()}&s4=${currentContent.buttonColor}&Sourceid=026&clickid={click_id}`;
    window.location.href = finalUrlBackButton;
  };

  // Back button handling
  useEffect(() => {
  const handlePopState = () => {
    // Only proceed if content is loaded
    if (!currentContent.tagline || !currentContent.buttonColor) {
      console.log('Content not loaded for back button');
      return;
    }
    handleBackButton();
  };


  window.addEventListener('popstate', handlePopState);
  window.history.pushState({ page: 'escort-side' }, '', '');

  return () => {
    window.removeEventListener('popstate', handlePopState);
  };
}, [currentContent]);

  const handleButtonClick = () => {
    window.open('https://push.mobirealm.com/click', '_blank');
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 999999999);
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
                    
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem" }}>
                  {/* <h1 className="brand-name">WHORENY</h1> */}
                  <div className="logo-section">
                    <Image 
                      src={isMobile ? "/logo-mob.png" : "/logo-desk.png"} 
                      alt="whoreny Logo" 
                      width={isMobile ? 220 : 550}
                      height={isMobile ? 42 : 105}
                      className="logo-image"
                      style={{alignItems: "center"}}
                    />
                  </div>
                </div>
                <h2 className="tagline">{currentContent.tagline}</h2>
                <p className="description">{currentContent.description}</p>
                
                <button
                  onClick={handleButtonClick}
                  className="cta-button"
                  style={{ backgroundColor: `#${currentContent.buttonColor}` }}
                >
                  {currentContent.buttonText}
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Desktop/Tablet layout: side by side
          <div className="desktop-layout">
            <div className="left-section">
              <div className="text-content">
                  <div className="logo-section">
                    <Image 
                      src={isMobile ? "/logo-mob.png" : "/logo-desk.png"} 
                      alt="whoreny Logo" 
                      width={isMobile ? 220 : 550}
                      height={isMobile ? 42 : 105}
                      className="logo-image"
                    />
                  </div>
                {/* <h1 className="brand-name">WHORENY</h1> */}
                <h2 className="tagline">{currentContent.tagline}</h2>
                <p className="description">{currentContent.description}</p>
                
                <button
                  onClick={handleButtonClick}
                  className="cta-button"
                  style={{ backgroundColor: `#${currentContent.buttonColor}` }}
                >
                  {currentContent.buttonText}
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
            {/* Revive Adserver Image Tag */}
            <a 
              href={`https://adzone.adveroi.com/delivery/ck.php?n=a517340e&cb=${getRandomNumber()}`} 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <img 
                src={`https://adzone.adveroi.com/delivery/avw.php?zoneid=4&source=FooterWhoerny&cb=${getRandomNumber()}&n=a517340e`} 
                alt='' 
                style={{ 
                  width: '350px', 
                  height: '100px',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </a>
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
          min-height: 250px; /* Ensure enough space for banner */
          display: flex;
          align-items: center;
          justify-content: center;
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
        @@media (max-width: 768px) {
          .banner-space {
            padding: 1.5rem;
            min-height: 200px;
          }
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
          .banner-space {
            padding: 1rem;
            min-height: 150px;
          }
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

// Main component with Suspense boundary
export default function EscortSidePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    }>
      <EscortSideContent />
    </Suspense>
  );
}