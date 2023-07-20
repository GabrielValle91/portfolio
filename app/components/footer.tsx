import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
      <p>
        Built with{' '}
        <Link
          href='https://nextjs.org/'
          className='font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300'
          target='_blank'
          rel='noreferrer'
        >
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href='https://tailwindcss.com/'
          className='font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300'
          target='_blank'
          rel='noreferrer'
        >
          Tailwind CSS
        </Link>
        , deployed with{' '}
        <Link
          href='https://pages.github.com/'
          className='font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300'
          target='_blank'
          rel='noreferrer'
        >
          Github pages
        </Link>
        .{' '}
      </p>
    </footer>
  );
};

export default Footer;
