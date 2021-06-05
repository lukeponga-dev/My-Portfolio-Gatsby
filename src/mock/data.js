import { nanoid } from 'nanoid';


// HEAD DATA
export const headData = {
  title: 'Luke Ponga | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Software Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "Luke Ponga!",
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm passionate about working on software projects, I discovered my interest for developing websites and applications when I was 11 years old.",
  paragraphTwo:
    ' I have the ability and experience required to design and execute complex software projects, as well as software testing.',
  paragraphThree:
    'Graduated diploma level 6 software development. I am currently looking for entry level software development roles',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'aotearoanz.online.png',
    title: 'New Zealand Website',
    info: 'An Assignment I was given while i was studying web design and development',
    info2: '',
    url: 'https://aotearoanz.online/',
    repo: 'https://github.com/therealponga1/New-Zealand-Website', // if no repo, the button will not show up
  },
  
   {
    id: nanoid(),
    img: 'project2.png',
    title: 'Doctor Appointments',
    info: 'I developed doctors appointmnets for one of my assignments in software development',
    info2: 'Doctor appointments is a web app using the asp.net core framework. The Purpose of this web app is to provid patients with an easy appointment booking systems',
    url: 'https://doctorsappointments.azurewebsites.net/',
    repo: 'https://github.com/therealponga1/Doctors_Appointments_DSD06', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
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
      url: 'https://www.linkedin.com/in/luke-ponga-476809183',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/therealponga1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
