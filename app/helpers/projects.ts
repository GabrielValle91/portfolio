export interface IProject {
  title: string;
  projectImage: string;
  demoUrl?: string;
  codeUrl?: string;
  synopsis: string;
  technologies: string[];
  madeAt?: string;
  year: number;
}

export const projects: IProject[] = [
  {
    title: 'Wildcard',
    projectImage: 'https://i.imgur.com/UPuHZZl.png',
    // demoUrl: 'https://wildcard-sinatra.herokuapp.com/',
    codeUrl: 'https://github.com/GabrielValle91/sinatra-project',
    synopsis:
      'A Ruby application that utilizes the Sinatra framework. This web application provides basic functions of a Warehouse Management System. Users can track clients, unique items on a per client basis, inventory levels per item and inbound and outbound transactions, and items on each transaction, for clients. Custom CSS and HTML was used for page formatting.',
    technologies: ['Ruby', 'Sinatra', 'CSS', 'HTML'],
    madeAt: 'Flatiron School',
    year: 2018,
  },
  {
    title: 'Speed',
    projectImage: 'https://i.imgur.com/jLtCSya.jpg',
    // demoUrl: 'https://speed-tms.herokuapp.com/',
    codeUrl: 'https://github.com/GabrielValle91/rails-project',
    synopsis:
      'A Ruby on Rails application that implements OAuth for user authentication. This web application provides basic functions of a Transportation Management System. Users can track clients, drivers, locations for pickup or delivery, and shipments. Users have the ability to assign items and drivers to shipments, providing a dispatcher the ability to track work for their drivers. Javascript and JQuery were added to provide additional user functionality. Bootstrap framework provided the CSS for this project.',
    technologies: [
      'Ruby on Rails',
      'Javascript',
      'JQuery',
      'Bootstrap',
      'OAuth',
    ],
    madeAt: 'Flatiron School',
    year: 2018,
  },
  {
    title: 'PAWS',
    projectImage: 'https://i.imgur.com/UMz13fkm.jpg',
    // demoUrl: 'https://young-beyond-21632.herokuapp.com/',
    codeUrl:
      'https://github.com/GabrielValle91/people-assisting-wandering-strays',
    synopsis:
      'A React single page application that uses Redux for state management and React Router for navaigation. This web application allows a community to keep track of lost and found pets in an attempt to reunite them with their families. A Rails API is utilized for data storage and Devise provides user authentication.',
    technologies: [
      'Ruby',
      'Rails API',
      'Devise',
      'React',
      'Redux',
      'React Router',
      'Semantic-UI',
    ],
    madeAt: 'Flatiron School',
    year: 2018,
  },
  {
    title: 'Polarity',
    projectImage: 'https://i.imgur.com/6rpuqxW.jpg',
    demoUrl: 'http://www.polarity3d.com',
    synopsis:
      'A website created for a startup company that allows them to update their team members, faqs, and blog posts.',
    technologies: [
      'JWT',
      'Ruby',
      'Rails API',
      'React',
      'React Router',
      'Semantic-UI',
    ],
    year: 2019,
  },
  {
    title: 'Rewards & Recognition',
    projectImage: '',
    demoUrl: 'https://www.worktango.com/recognition-software',
    synopsis:
      'A Rails application that uses GraphQL for data fetching from the Mongo database to display on the React frontend. This web application allows a user to send recognition to team members, giving them varying amounts of points that can be spent for rewards. Other users can comment on and interact with Recognition posts and provide additional points to the recognized team member.',
    technologies: ['Rails', 'GraphQL', 'MongoDB', 'React'],
    madeAt: 'KazhooHR',
    year: 2019,
  },
  {
    title: 'Performance Management',
    projectImage: '',
    demoUrl: 'https://www.worktango.com/goals-and-okrs',
    synopsis:
      'A NodeJS and Angular application that uses a Postgres database. This web application allows a team member to collaborate with their managers to set annual, quarterly and short term goals as a way to track team member engagement and improvement.',
    technologies: ['NodeJS', 'Postgres', 'Angular'],
    madeAt: 'KazhooHR',
    year: 2019,
  },
  {
    title: 'Kazhoo',
    projectImage: '',
    demoUrl: 'https://www.worktango.com/',
    synopsis:
      'A modernized portal that tied the Rewards & Recognition and Performance Management softwares together as microservices.',
    technologies: ['NodeJS', 'GraphQL', 'Postgres', 'Typescript', 'React'],
    madeAt: 'KazhooHR',
    year: 2019,
  },
  {
    title: 'Lister',
    projectImage: 'https://i.imgur.com/MumfUNw.jpg',
    // demoUrl: 'https://radiant-thicket-85951.herokuapp.com/',
    codeUrl: 'https://github.com/GabrielValle91/lister',
    synopsis:
      'A Rails application that uses Hotwire for quick page loading. This web application allows a user to keep track of various lists and list items for each list. List items can have varying quantity, and both lists and list items can be deleted or marked complete.',
    technologies: ['Ruby on Rails', 'Hotwire', 'Bootstrap'],
    year: 2022,
  },
];

export const showcaseProjects: IProject[] = [
  // projects[3],
  projects[7],
  projects[2],
  projects[1],
  projects[0],
];
