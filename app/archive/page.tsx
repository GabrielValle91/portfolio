import Link from 'next/link';
import { projects, IProject } from '../helpers/projects';

export default function Page() {
  return (
    <div className='lg:py-24'>
      <Link
        className='group mb-2 inline-flex items-center font-semibold leading-tight text-cyan-300'
        href='/'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
            clipRule='evenodd'
          ></path>
        </svg>
        Gabriel Valle
      </Link>
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
        All Projects
      </h1>
      <table id='content' className='mt-12 w-full border-collapse text-left'>
        <thead className='sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur'>
          <tr>
            <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>
              Year
            </th>
            <th className='py-4 pr-8 text-sm font-semibold text-slate-200'>
              Project
            </th>
            <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
              Made at
            </th>
            <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell'>
              Built with
            </th>
            <th className='hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell'>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {projects
            .slice(0)
            .reverse()
            .map((project: IProject) => {
              return (
                <tr className='border-b border-slate-300/10 last:border-none'>
                  <td className='py-4 pr-4 align-top text-sm'>
                    <div className='translate-y-px'>{project.year}</div>
                  </td>
                  <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200'>
                    <div>
                      <div className='block sm:hidden'>
                        <Link
                          className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 hover:text-slate-200 focus-visible:text-cyan-300 sm:hidden group/link text-base'
                          href={`${project.demoUrl}`}
                          target='_blank'
                          rel='noreferrer'
                          aria-label={`${project.title}`}
                        >
                          <span>
                            {' '}
                            <span className='inline-block'>
                              {project.title}
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                                  clipRule='evenodd'
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </div>
                      <div className='hidden sm:block'>{project.title}</div>
                    </div>
                  </td>
                  <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell'>
                    <div className='translate-y-px whitespace-nowrap'>
                      {project.madeAt}
                    </div>
                  </td>
                  <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                    <ul className='flex -translate-y-1.5 flex-wrap'>
                      {project.technologies.map((tech: string) => {
                        return (
                          <li className='my-1 mr-1.5'>
                            <div className='flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 '>
                              {tech}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                  <td className='hidden py-4 align-top sm:table-cell'>
                    <ul className='translate-y-1'>
                      <li className='mb-1 flex items-center'>
                        <Link
                          className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-cyan-300 group/link text-sm'
                          href={`${project.demoUrl || project.codeUrl}`}
                          target='_blank'
                          rel='noreferrer'
                          aria-label='apps.apple.com'
                        >
                          <span>
                            {' '}
                            <span className='inline-block'>
                              {project.demoUrl || project.codeUrl}
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5'
                                aria-hidden='true'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                                  clipRule='evenodd'
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
