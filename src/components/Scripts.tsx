// src/components/Scripts.tsx
import Script from 'next/script'

export default function Scripts() {
  return (
    <>
      {/* jQuery must come first */}
      <Script 
        src="/includes/jquery-2.2.4.min.js" 
        strategy="beforeInteractive" 
      />
      
      {/* Initialize global variables */}
      <Script 
        src="/includes/global-vars.js" 
        strategy="beforeInteractive" 
      />
      
      {/* Head Scripts */}
      <Script src="/includes/vegas.js" strategy="beforeInteractive" />
      <Script src="/includes/function.js" strategy="beforeInteractive" />
      
      {/* Body Scripts */}
      <Script src="/includes/fire-app.js" strategy="afterInteractive" />
      <Script src="/includes/fire-database.js" strategy="afterInteractive" />
      <Script src="/includes/fire-firestore.js" strategy="afterInteractive" />
      <Script src="/includes/fire-messaging.js" strategy="afterInteractive" />
      <Script src="/includes/v3-01.js" strategy="afterInteractive" />
    </>
  )
}