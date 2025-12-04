// src/app/escort-full/page.tsx
"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Content variations
const TAGLINES = [
  "The Home for Horny Sluts."
];

const DESCRIPTIONS = [
  "Real Whores. Real Horny. Zero Apologies."
];

const BUTTON_TEXTS = [
  "Get Instant Access"
];

const BUTTON_COLORS = [
  "eb4a90", // Pink
];

function EscortFullContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [videoSource, setVideoSource] = useState("");
  const searchParams = useSearchParams();
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const randomVideoRef = useRef<number>(0);
  const bannerLoadedRef = useRef(false);

  // State for randomized content
  const [currentContent, setCurrentContent] = useState({
    tagline: "",
    description: "",
    buttonText: "Get Instant Access",
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

  // Initialize randomized content
    useEffect(() => {
      const randomTagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
      const randomDescription = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
      const randomButtonText = BUTTON_TEXTS[Math.floor(Math.random() * BUTTON_TEXTS.length)];
      const randomButtonColor = BUTTON_COLORS[Math.floor(Math.random() * BUTTON_COLORS.length)];
      const randomImageNumber = Math.floor(Math.random() * 33) + 1;
  
      setCurrentContent({
        tagline: randomTagline,
        description: randomDescription,
        buttonText: randomButtonText,
        buttonColor: randomButtonColor,
        imageNumber: randomImageNumber
      });
    }, []);

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

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 999999999);
  };

  // Generate random video number and set video source based on device type
  useEffect(() => {
    // Generate random number only once between 1 and 5
    if (randomVideoRef.current === 0) {
      randomVideoRef.current = Math.floor(Math.random() * 5) + 1;
    }
    
    const randomNumber = randomVideoRef.current;
    const videoPath = isMobile 
      ? `/escort/mob/gif${randomNumber}.mp4`
      : `/escort/desk/gif${randomNumber}.mp4`;
    
    setVideoSource(videoPath);
  }, [isMobile]); // Re-run when isMobile changes

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
          sub1: "lp1",
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
      email: "lp1"
    });

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

    const finalUrlBackButton = `${baseUrl}?${params.toString()}&s4=${currentContent.buttonColor}&Sourceid=026&clickid={click_id}`;
    window.location.href = finalUrlBackButton;
  };

  const handleJoinFree = () => {
    window.location.href = 'https://push.mobirealm.com/click';
  };

  const handleTiktokGirls = () => {
    // Construct URL with current content as parameters
    const baseUrl = 'https://push.mobirealm.com/93ac51fa-3abe-4861-a6bb-2dde380e2256';
    const params = new URLSearchParams({
      subid: currentContent.tagline,
      adzone: currentContent.description,
      site: `img${currentContent.imageNumber}.jpg`,
      campaign: currentContent.buttonText,
    });
    
    const finalUrlTiktok = `${baseUrl}?${params.toString()}&banner=${currentContent.buttonColor}&Sourceid=027`;
    window.open(finalUrlTiktok);
  };

  const handleAdultGames = () => {
    // Construct URL with current content as parameters
    const baseUrl = 'https://push.mobirealm.com/0ba7ea6b-d362-4703-a32f-2616b3bb7461';
    const params = new URLSearchParams({
      subid: currentContent.tagline,
      adzone: currentContent.description,
      site: `img${currentContent.imageNumber}.jpg`,
      campaign: currentContent.buttonText,
    });
    
    const finalUrlAdultGames = `${baseUrl}?${params.toString()}&banner=${currentContent.buttonColor}&Sourceid=027`;
    window.open(finalUrlAdultGames);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with text links - conditionally rendered */}
      {showHeader && (
        <header className="header">
          <div className="header-content">
            <nav className="header-nav">
              <a href="#" onClick={handleTiktokGirls} style={{color: 'white'}}>Tiktok Girls</a>
              <a href="#" onClick={handleAdultGames} style={{color: 'white'}}>Adult Games</a>
            </nav>
          </div>
        </header>
      )}

      <main className="main-content">
        {/* Background Video/Image */}
        <div className="video-container">
          {videoSource && (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="background-video"
              poster={videoSource}
              key={videoSource} // Add key to force re-render when video source changes
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="video-overlay"></div>
          
          {/* Logo - Top Left for Desktop, Center for Mobile */}
          <div className={`logo-container ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="logo-section">
                <Image 
                  src={isMobile ? "/logo-mob.png" : "/logo-desk.png"} 
                  alt="whoreny Logo" 
                  width={isMobile ? 220 : 550}
                  height={isMobile ? 42 : 105}
                  className="logo-image"
                />
              </div>
          </div>

          {/* Banner Content */}
          <div className={`banner-content ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="banner-text">
              <h1 className="main-heading">{currentContent.tagline}</h1>
              {/* <div className="divider"></div> */}
              <p className="sub-heading">Real Whores. Real Horny. Zero Apologies.</p>
            </div>

            {/* CTA Section */}
            <footer className="cta-section">
              <button
                onClick={handleJoinFree}
                  className="cta-button"
                  style={{ backgroundColor: `#${currentContent.buttonColor}` }}
              >
                {currentContent.buttonText}
              </button>
              {/* <p className="login-prompt">
                Already a member? <a href="/escort-full/login" className="login-link">Log in</a>.
              </p> */}
            </footer>
          </div>

          {showBanner && isMobile && (
  <div className="mobile-banner-overlay">
    <a
      href={`https://adzone.adveroi.com/delivery/ck.php?n=a517340e&cb=${getRandomNumber()}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src={`https://adzone.adveroi.com/delivery/avw.php?zoneid=4&source=FooterWhoerny&cb=${getRandomNumber()}&n=a517340e`}
        alt='Ad Banner'
        className="banner-image-overlay"
        style={{
                  width: '300px',
                  height: '100px',
                  display: 'block',
                  margin: '0 auto',
                  
                }}
      />
    </a>
  </div>
)}
        </div>
      </main>
        <footer className="banner-section">
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
   
      {/* Rest of your styles remain the same */}
      <style jsx>{`
        .min-h-screen {
          min-height: 100vh;
        }

        .mobile-banner-overlay {
        position: absolute;
        bottom: 20px; /* Distance from bottom */
        left: 50%;
        transform: translateX(-50%);
        z-index: 15;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 3px;
        padding: 2px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 0.5s ease-out;
        width: 300px;
        height: 100px;
      }

.banner-image-overlay {
  border-radius: 4px;
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Adjust CTA section to accommodate banner overlay */
.banner-content.mobile {
  position: absolute;
  top: 40%; /* Changed from 50% to make room for banner */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
  width: 90%;
  max-width: 400px;
}

/* Adjust desktop banner to stay outside video */
.desktop-banner {
  width: 100%;
  background-color: #f8f8f8;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 20;
}

/* Ensure footer stays below everything */
.footer-content {
  position: relative;
  z-index: 10;
}

@media (max-width: 480px) {
  .banner-content.mobile {
    top: 30%; /* Further adjustment for phones */
  }
  
  .mobile-banner-overlay {
    padding: 0.4rem;
  }
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

        .main-content {
          flex: 1;
          position: relative;
        }

        .video-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Keep full viewport */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This helps with layout */
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

        /* Mobile Banner - Positioned at bottom */
        .mobile-banner {
          width: 100%;
          background-color: #f8f8f8;
          border-top: 1px solid #e0e0e0;
          padding: 1rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
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
          background: linear-gradient(135deg, #ff3131 0%, #ff914d 100%);
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

          .mobile-banner {
            padding: 0.75rem;
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

           .banner-image-overlay {
    width: 300px;
    height: 100px;
  }
  
  .mobile-banner-overlay {
    bottom: 15px;
    padding: 1px;
  }
}
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0 1rem;
          }

           .mobile-banner {
            padding: 0.5rem;
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
          
          .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }

          .banner-image-overlay {
    width: 240px;
    height: 60px;
  }
  
  .mobile-banner-overlay {
    bottom: 10px;
    padding: 5px;
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