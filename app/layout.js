import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aggregatoor',
  description: 'Your crypto news hub',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-100`}>
        <main className="bg-slate-900 min-h-screen w-screen max-w-screen-2xl m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
