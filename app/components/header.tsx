import Link from 'next/link';
import Socials from './socials';
import SectionLinks from './sectionLinks';

const Header = ({ visibleSection }: { visibleSection: string }) => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/4 lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          <Link href='#about'>Gabriel Valle</Link>
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
          Data Analyst and Software Engineer
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>
          I craft dynamic data dashboards, tools, and software that offers
          profound insights and enhances user experience.
        </p>
        <SectionLinks visibleSection={visibleSection} />
      </div>
      <Socials />
    </header>
  );
};

export default Header;
