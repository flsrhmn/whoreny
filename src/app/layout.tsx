import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Scripts from '@/components/Scripts';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whoreny - Your Next Hookup Starts Here",
  description: "Unleash Your Inner Whore.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const clickId = cookieStore.get("clickid")?.value || "";
  const safe = (v: string) => v.replace(/"/g, '\\"');
  return (
    <html lang="en">
      <Script src="https://torazzo-landing-page-generator.s3.us-east-1.amazonaws.com/push-notification/fire-app.js" async/>
      <Script src="https://torazzo-landing-page-generator.s3.us-east-1.amazonaws.com/push-notification/fire-database.js" async />
      <Script src="https://torazzo-landing-page-generator.s3.us-east-1.amazonaws.com/push-notification/fire-firestore.js" async/>
      <Script src="https://torazzo-landing-page-generator.s3.us-east-1.amazonaws.com/push-notification/fire-messaging.js" async/>
      <Script src="https://torazzo-landing-page-generator.s3.us-east-1.amazonaws.com/push-notification/v3-08.js" async />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}