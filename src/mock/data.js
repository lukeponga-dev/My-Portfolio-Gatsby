import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luke Ponga | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Luke Ponga',
  subtitle: 'Im the Software Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Luke, and I have spent my entire life in Hamilton, New Zealand. I discovered my interest for designing websites and applications when I was 11 years old. It quickly evolved into something I want to do for a living.',
  paragraphTwo: 'Im a strong conceptual thinker with experience in software development. I have the ability and experience required to design and execute complex software projects, as well as software testing. Im committed to being a valuable asset to the company for which I work because developing programmes is a passion of mine.',
  paragraphThree: 'Recently grauduated diploma level 6 software development. I am currently looking for entry level software development roles',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'aotearoanz.online.png',
    title: 'New Zealand Website',
    info: 'an assignment i was given whne i was studying web design and development',
    info2: '',
    url: 'https://aotearoanz.online/',
    repo: 'https://github.com/therealponga1/New-Zealand-Website', // if no repo, the button will not show up
  },
  //  {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
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
