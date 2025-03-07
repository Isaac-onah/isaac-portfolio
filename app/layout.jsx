import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets:["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Isaac Onah | Passionate Mobile Engineer",
  description: 
    "Experienced Mobile Engineer with 5+ years in iOS & Android app development. Skilled in Flutter, Swift, Kotlin, React Native, and backend integrations. Passionate about crafting seamless user experiences and mentoring developers.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
   
        <StairTransition />
        
        <PageTransition>
          {children}
          </PageTransition>
      </body>
    </html>
  );
}
