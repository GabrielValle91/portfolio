export interface IJob {
  title: string;
  company: string;
  companyUrl: string;
  synopsis: string;
  skills: string[];
  startDate: string;
  endDate: string;
}

export const jobs: IJob[] = [
  {
    title: 'Data Engineer Consultant',
    company: 'AIT Worldwide / Spur Freight',
    companyUrl: 'www.aitworldwide.com',
    synopsis:
      '+ Migrated the DC team to a new billing platform without loss of transparency or functionality \n + Designed and implemented custom solutions for multi-team data gathering and metric reporting \n + Engineered a tool to handle annual client emailing and rate increases \n + Created PowerBI reports to provide deep insight into daily, quarterly and annual finances and operations',
    skills: ['PowerBI', 'Data Analytics', 'Excel', 'SQL'],
    startDate: '2021',
    endDate: '2022',
  },
  {
    title: 'Software Engineer',
    company: 'KazooHr',
    companyUrl: 'https://www.worktango.com/',
    synopsis: `+ Rebuilt a customer-facing platform by updating the feature set and UX/UI using JavaScript and Ruby on Rails. \n
      + Implemented a graphql api for use with the new React frontend and other company apps \n
      + Wrote maintainable, extensible, performance-minded code that combined the company's Performance Management (HighGround) and Rewards & Recognition (YouEarnedIt) products \n
      + Technologies included, but not limited to: ReactJS, NodeJS, GraphQL, MongoDB, Ruby on Rails, PostgreSQL
      `,
    skills: [
      'React',
      'Typescript',
      'GraphQL',
      'Rails',
      'NodeJS',
      'MongDB',
      'Postgres',
    ],
    startDate: '2019',
    endDate: '2020',
  },
  {
    title: 'Business Intelligence Architect II',
    company: 'Intelligent Logistics',
    companyUrl: 'www.intelligentlogistics.com',
    synopsis: `+ Maintained reports to provide operational and financial insight into five company departments \n
      + Developed a load board in MS Access for the Truck Brokerage department to fulfill an operational need
      `,
    skills: ['PowerBI', 'MS Access', 'Excel', 'SQL', 'DAX', 'VBA'],
    startDate: 'Feb 2018',
    endDate: 'Nov 2018',
  },
  {
    title: 'Operations Analyst',
    company: 'Intelligent Logistics',
    companyUrl: 'www.intelligentlogistics.com',
    synopsis: `+ Devised reports to provide operational and financial insight into warehouse and cartage departments \n
      + Designed and developed SPEED, a system that replaced the existing TMS and added additional operational functions for both warehouse and cartage teams
      `,
    skills: ['MS Access', 'Excel', 'VBA', 'SQL'],
    startDate: '2017',
    endDate: '2018',
  },
  {
    title: 'Distribution Associate',
    company: 'Intelligent Logistics',
    companyUrl: 'www.intelligentlogistics.com',
    synopsis: `+ Managed inventory system, order creation and inventory levels, and client communication \n
      + Engineered an excel tool for billing calculations - rates were based on freight weight and city zones \n
      + Handled all billing for warehouse and cartage departments
      `,
    skills: ['Client Communication', 'Excel', 'MS Word'],
    startDate: '2016',
    endDate: '2017',
  },
];
