import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
import Navigation from '../components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Job Seeker Dashboard',
  description: 'Find your dream job with our job seeker dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen bg-background">
            <Navigation />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
