import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Langat Moimaritim | Full Stack Web Developer",
  description: "Portfolio website of Langat Moimaritim, juniour full-stack developer specializing in Django for backend development and Reactjs for front-end",

  openGraph: {
    title: "Langat Moimaritim | Web Developer",
    description: "Showcasing my web development projects and skills.",
    url: "https://moimaritim.tech",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${jetbrainsMono.variable} text-slate-400`}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4">
          <Header />
          <div className='pt-24 lg:w-1/2 lg:py-24'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
