import React from "react";
import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";

// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import Header from "./components/Header/page";
// import Footer from "./components/Footer/page";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <div style={{ flex: "1 1 auto" }}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
