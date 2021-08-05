import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luke Ponga | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Software Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Luke Ponga!',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I discovered my interest for developing websites and applications when I was 11 years old by using html on notepad, ever since then I’ve had a passion for it, I have the ability and experience required to design, execute and deploy software projects from my studies in web development and software development which I’ve recently graduated end of 2020.',
  paragraphTwo:
    ' One of my main goals is to continue to learn new skills and abilities so someday I can teach and guide people in my position. ',
  resume: 'https://drive.google.com/file/d/1iEhbIYwReLExSf5Lo7kK-FEoi-CcOMe8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'aotearoanz.online.png',
    title: 'New Zealand Website',
    info: 'Required to develop a NZ information website for Diploma of Web Design and Development',
    info2: '',
    url: 'https://nz-info.live/',
    repo: 'https://github.com/therealponga1/New-Zealand-Website', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Doctors Appointments ASP.NET Web App',
    info: 'I was required to develop a web app on .net core framework for diploma of software development',
    info2:
      'Doctor appointments is a web app using the asp.net core framework. The Purpose of this web app is to provid staff with an easy appointment tracking system',
    url: '',
    repo: 'https://github.com/therealponga1/Doctors_Appointments_DSD06', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Health Clinic MVC',
    info: 'Software Development ASP.NET MVC Assessment, MVC version of my  Doctors Appointments project',
    info2: 'This Project runs on dotnet core mvc framework ',
    url: '',
    repo: 'https://github.com/therealponga1/HealthClinic_MVC_DSD-07', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Vehicle API',
    info: 'Web api I was required to make for software development.  ',
    info2: 'Web api .net core framework for storing vehicles',
    url: 'https://carjam.azurewebsites.net/',
    repo: 'https://github.com/lukeponga-dev/WebAPI', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coingecko-project.PNG',
    title: 'Crypto Currency Stats - CoinGeco API',
    info: 'Project me an a buddy create together to get a better understanding of apis',
    info2:
      'Website that shows crypto currency prices using an api to retrive coin data built with html5, css, javascript and bootstrap',
    url: 'https://cryptocoinstats.netlify.app/',
    repo: 'https://github.com/lukeponga-dev/CryptoCoins-Price-Stats', // if no repo, the button will not show up
  },
];
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me!',
  email: 'developmentdesignsltd@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/gilchrist_luke',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/gilchrist/pens/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lukeponga/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lukeponga-Dev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
