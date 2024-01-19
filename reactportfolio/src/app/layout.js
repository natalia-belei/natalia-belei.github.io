import '../styles/globals.css';
import { Montserrat } from "next/font/google";
import config from '../../config';
import NavBar from './_components/NavBar';
import Footer from './_components/Footer';
import UnderConstruction from './_components/UnderConstruction';
import AnimatedPresenceContainer from './_components/AnimatePresenseContainer';
import Script from 'next/script';

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
        {/* Prevent scrolling to top on browser history navigation (back/forward) */}
        <Script id="manual-scroll-restoration">{`window.history.scrollRestoration = "manual"`}</Script>
      </body>
    </html>
  )
}