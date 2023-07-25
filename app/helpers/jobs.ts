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
    companyUrl: 'https://www.aitworldwide.com/',
    synopsis:
      'Designed and implemented custom solutions for multi-team data gathering and metric reporting, leading to a 35% improvement in data accuracy and a 60% reduction in report generation time. Created PowerBI reports to provide deep insight into daily, quarterly and annual finances and operations that assisted in company buyout.',
    skills: ['Data Analysis', 'DAX', 'Excel', 'Power Bi', 'SQL', 'VBA'],
    startDate: '2021',
    endDate: '2022',
  },
  {
    title: 'Software Engineer',
    company: 'KazooHr',
    companyUrl: 'https://www.worktango.com/',
    synopsis:
      'Implemented an overhaul of the customer-facing platform, focusing on UX and functionality. Leveraged React and Rails, resulting in a visually appealing and highly intuitive interface. Spearheaded the seamless integration of a robust GraphQL API with the new React frontend and multiple internal company applications, significantly enhancing data retrieval efficiency. ',
    skills: [
      'GraphQL',
      'Javascript',
      'MongDB',
      'NodeJS',
      'Postgres',
      'Rails',
      'React',
      'Typescript',
    ],
    startDate: '2019',
    endDate: '2020',
  },
  {
    title: 'Business Intelligence Architect II',
    company: 'Intelligent Logistics',
    companyUrl: 'www.intelligentlogistics.com',
    synopsis:
      'Designed a comprehensive suite of dynamic reports, delivering operational and financial insights across five departments which was a catalyst for informed decision-making at every organizational level. Conceptualized and executed a load board within MS Access, custom-tailored for the Truck Brokerage department, which streamlined and optimized load management, resulting in enhanced operational efficiency.',
    skills: [
      'Data Analysis',
      'DAX',
      'Excel',
      'MS Access',
      'Power Bi',
      'SQL',
      'VBA',
    ],
    startDate: 'Feb 2018',
    endDate: 'Nov 2018',
  },
  {
    title: 'Operations Analyst',
    company: 'Intelligent Logistics',
    companyUrl: 'www.intelligentlogistics.com',
    synopsis:
      'Implemented operational and financial reports that led to cost reduction and increased efficiency. Pioneered development of SPEED, a game-changing replacement for the existing TMS, which enhanced workflow and streamlined operations, resulting in increased levels of productivity and customer satisfaction.',
    skills: ['Data Analysis', 'Excel', 'MS Access', 'Power Bi', 'SQL', 'VBA'],
    startDate: '2017',
    endDate: '2018',
  },
  {
    title: 'Distribution Associate',
    company: 'Intelligent Logistics',
    companyUrl: 'www.intelligentlogistics.com',
    synopsis:
      'Led end-to-end management of the inventory system, including order creation and monitoring of inventory levels, and client communication, resulting in streamlined operations and uninterrupted client satisfaction. Engineered a sophisticated Excel tool to execute precise billing calculations, which expedited the billing process and improved accuracy, leading to increased cost savings and heightened client trust.',
    skills: ['Data Analysis', 'Excel', 'VBA'],
    startDate: '2016',
    endDate: '2017',
  },
];
