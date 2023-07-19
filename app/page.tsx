import JobListing from './components/jobListing';
import AboutMe from './components/aboutMe';
import { jobs, IJob } from './helpers/jobs';

export default function Home() {
  return (
    <main className='pt-24 lg:w-1/2 lg:py-24'>
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
        <ol className='group/list'>
          {jobs.map((job: IJob) => {
            return <JobListing {...job} />;
          })}
        </ol>
      </section>
    </main>
  );
}
