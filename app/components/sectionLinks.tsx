import Link from 'next/link';
import { links } from '../helpers/links';

const SectionLinks = ({ visibleSection }: { visibleSection: string }) => {
  const selectedClassLink: string =
    'nav-text text-xs font-bold uppercase tracking-widest text-slate-200';
  const unselectedClassLink: string =
    'nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200';
  const selectedClassLine: string =
    'nav-indicator mr-4 h-px w-16 bg-slate-200 transition-all motion-reduce:transition-none';
  const unselectedClassLine: string =
    'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none';
  return (
    <nav className='nav hidden lg:block' aria-label='In-page jump links'>
      <ul className='mt-16 w-max'>
        {links.map((link) => {
          return (
            <li key={link.href}>
              <Link
                className='group flex items-center py-3'
                href={`${link.href}`}
              >
                <span
                  className={
                    link.href == visibleSection
                      ? selectedClassLine
                      : unselectedClassLine
                  }
                ></span>
                <span
                  className={
                    link.href == visibleSection
                      ? selectedClassLink
                      : unselectedClassLink
                  }
                >
                  {link.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionLinks;
