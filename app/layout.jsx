import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "My Portfolio",
  description: "This is my minimalistic portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} text-slate-400`}>
        {/* Main Layout Container */}
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4">
          {/* Static Header Component */}
          <Header />
          {/* Main Content Container */}
          <div className='pt-24 lg:w-1/2 lg:py-24'>
            {children} {/* This will render the content of each page */}
          </div>
        </div>
      </body>
    </html>
  );
}
