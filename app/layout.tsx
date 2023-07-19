import './globals.css';
import type { Metadata } from 'next';
import Header from './components/header';

export const metadata: Metadata = {
  title: 'Gabriel Valle Portfolio v2',
  description:
    'Portfolio for Gabriel Valle, created with NextJS and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'>
        <main className='lg:flex lg:justify-between lg:gap-4'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
