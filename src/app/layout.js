import "./globals.css";
import { Inter, DM_Sans, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
