import JobListing from './components/jobListing';
import AboutMe from './components/aboutMe';
import ProjectListing from './components/projectListing';
import { jobs, IJob } from './helpers/jobs';
import { projects, IProject } from './helpers/projects';

export default function Home() {
  return (
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
          {projects.map((project: IProject) => {
            return <ProjectListing {...project} />;
          })}
        </ol>
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
        Article Section
      </section>
    </main>
  );
}
