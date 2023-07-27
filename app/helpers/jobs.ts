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
    company: 'AIT Worldwide / Intelligent Logistics',
    companyUrl: 'https://www.aitworldwide.com/',
    synopsis:
      'Innovated and deployed custom solutions for multi-team data gathering and metric reporting, leading to a 35% improvement in data accuracy and a 60% reduction in report generation time. Developed high-impact Power BI reports, unlocking insight into daily, quarterly and annual financial and operational metrics that played a role in facilitating the company’s buyout.',
    skills: ['Data Analysis', 'DAX', 'Excel', 'Power Bi', 'SQL', 'VBA'],
    startDate: '2021',
    endDate: '2022',
  },
  {
    title: 'Software Engineer',
    company: 'KazooHr',
    companyUrl: 'https://www.worktango.com/',
    synopsis:
      'Enacted an overhaul of the customer-facing platform, focusing on UI/UX and functionality, leveraging React and Rails, resulting in a visually appealing and highly intuitive interface. Spearheaded the seamless integration of a robust GraphQL API with the new React frontend and multiple internal company applications, significantly enhancing data retrieval efficiency. ',
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
      'Designed a comprehensive suite of dynamic reports, delivering operational and financial insights across five departments which was a catalyst for informed decision-making at every organizational level. Conceptualized and executed a custom-tailored load board within MS Access, which streamlined and optimized load management, refining operational efficiency by 8%.',
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
      'Implemented operational and financial reports that led to 22% cost reduction and 13% increased efficiency. Pioneered development of a game-changing replacement for the existing transportation management system, which augmented workflow, streamlined operations, and elevated productivity by 23%.',
    skills: ['Data Analysis', 'Excel', 'MS Access', 'Power Bi', 'SQL', 'VBA'],
    startDate: '2017',
    endDate: '2018',
  },
  {
    title: 'Distribution Associate',
    company: 'Intelligent Logistics',
    companyUrl: 'www.intelligentlogistics.com',
    synopsis:
      'Led end-to-end management of the inventory system, including order creation and monitoring of inventory levels, and client communication, producing streamlined operations and supreme client satisfaction. Architectured a sophisticated Excel tool to execute precise billing calculations, which expedited the billing process and improved accuracy, leading to a 17% cost reduction and heightened client trust.',
    skills: ['Data Analysis', 'Excel', 'VBA'],
    startDate: '2016',
    endDate: '2017',
  },
];
