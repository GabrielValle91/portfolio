import JobListing from './components/jobListing';
import AboutMe from './components/aboutMe';
import ProjectListing from './components/projectListing';
import { jobs, IJob } from './helpers/jobs';
import { showcaseProjects, IProject } from './helpers/projects';
import ArticleListing, { IMediumArticle } from './components/articleListing';
import Link from 'next/link';
import Header from './components/header';

async function getData() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gabriel.Valle'
  );
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const articles = [data.items[0], data.items[1], data.items[2], data.items[3]];
  return (
    <div className='lg:flex lg:justify-between lg:gap-4'>
      <Header />
      <main className='pt-24 lg:w-3/5 lg:py-24'>
        <section
          id='about'
          className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        >
          <AboutMe />
        </section>
        <section
          id='experience'
          className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        >
          <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
              Experience
            </h2>
          </div>
          <ol className='group/list'>
            {jobs.map((job: IJob) => {
              return <JobListing {...job} />;
            })}
          </ol>
          <div className='mt-12'>
            <Link
              className='inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group'
              aria-label='View Full Resume'
              href='/resume.pdf'
            >
              <span>
                <span className='border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none'>
                  View Full{' '}
                </span>
                <span className='whitespace-nowrap'>
                  <span className='border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none'>
                    Resume
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </section>
        <section
          id='projects'
          className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        >
          <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
              Projects
            </h2>
          </div>
          <ol className='group/list'>
            {showcaseProjects.map((project: IProject) => {
              return <ProjectListing {...project} />;
            })}
          </ol>
          <div className='mt-12'>
            <Link
              className='inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group'
              aria-label='View Full Resume'
              href='/archive'
            >
              <span>
                <span className='border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none'>
                  View Full Project{' '}
                </span>
                <span className='whitespace-nowrap'>
                  <span className='border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none'>
                    Archive
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </section>
        <section
          id='articles'
          className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
        >
          <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
              Articles
            </h2>
          </div>
          <ol className='group/list'>
            {articles.map((item: IMediumArticle) => {
              return <ArticleListing {...item} />;
            })}
          </ol>
        </section>
        <footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
          <p>
            Built with{' '}
            <a
              href='https://nextjs.org/'
              className='font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300'
              target='_blank'
              rel='noreferrer'
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              href='https://tailwindcss.com/'
              className='font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300'
              target='_blank'
              rel='noreferrer'
            >
              Tailwind CSS
            </a>
            , deployed with{' '}
            <a
              href='https://pages.github.com/'
              className='font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300'
              target='_blank'
              rel='noreferrer'
            >
              Github pages
            </a>
            .{' '}
          </p>
        </footer>
      </main>
    </div>
  );
}
