import SkillPill from './skillPill';

interface IJobListing {
  title: string;
  company: string;
  companyUrl: string;
  synopsis: string;
  skills: string[];
  startDate: string;
  endDate: string;
}

const JobListing = (props: IJobListing) => {
  const { title, company, companyUrl, synopsis, skills, startDate, endDate } =
    props;

  return (
    <div className='w-2/3 grid grid-cols-6'>
      <div className='col-span-2'>
        <div>
          {startDate} - {endDate}
        </div>
      </div>
      <div className='col-span-4'>
        <div>{title}</div>
        <a href={companyUrl}>
          <div>{company}</div>
        </a>
        <div>{synopsis}</div>
        <div>
          {skills.map((skill: string) => {
            return <SkillPill skill={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
