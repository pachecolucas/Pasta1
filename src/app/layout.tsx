"use client";

import styled from "styled-components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </Menu>
        <hr />
        {children}
      </body>
    </html>
  );
}

const Menu = styled.div`
  text-align: center;
  padding: 50px 0;
  a {
    border: 1px solid white;
    margin: 5px;
    padding: 5px;
  }
`;
