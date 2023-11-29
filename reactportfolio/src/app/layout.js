import '../styles/globals.css';
import { Montserrat } from "next/font/google";
import config from 'config.js';
import NavBar from './_components/NavBar';
import Footer from './_components/Footer';
import UnderConstruction from './_components/UnderConstruction';
import AnimatedPresenceContainer from './_components/AnimatePresenseContainer';

export const metadata = {
  favicon: '/favicon.ico',
};

export const viewport = 'width=device-width, initial-scale=1';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {config.isUnderConstruction && <UnderConstruction />}
        <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen relative`}>
          <NavBar />
          <AnimatedPresenceContainer mode='wait'>
            {children}
          </AnimatedPresenceContainer>
        </main>
        <Footer />
      </body>
    </html>
  )
}