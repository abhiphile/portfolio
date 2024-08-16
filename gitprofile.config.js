// gitprofile.config.js

const config = {
  github: {
    username: 'abhishek-kuma', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["abhishek" , "sympy" ,"Marketplace","aksha","Portfolio","CodeClauseInternship_MusicPlayer","CP-Sheet","FACIAL-DETECTION-SYSTEM"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'abhishek-kumar-nitdelhi',
    twitter: 'A__B_H_ISHEK',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'krabhishek_',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'abhishek.nitdelhi@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1RVKr5u_hWnq1Kk-unnuqRRBTonGC1tMd/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'HTML / CSS',
    'Tailwind CSS / Bootstrap',
    'Git / Github',
    'MySQL / MongoDB',
    'Appwrite',
    'NumPy / Pandas',
    'Machine Learning',
    'Data Science',
    'Open CV',
    'Sci-Kit Learn'
  ],
  experiences: [
    {
      company: 'VSAT Pvt. Ltd.',
      position: 'Web Developer Intern',
      from: 'June 2023',
      to: 'July 2023',
      companyLink: 'https://www.vsat-refurb.com/',
    },
    {
      company: 'YBI Foundation',
      position: 'ML Intern',
      from: 'September 2023',
      to: 'September 2023',
      companyLink: 'https://www.ybifoundation.org/',
    },
  ],
  certifications: [
    {
      name: 'Meta Front-End Developer Professional Certificate',
      body: 'HTML | CSS |JS | Bootstrap | React Basics',
      year: '',
      link: ''
    },
    {
      name: 'Data Science and Machine Learning Pro+ Certificate',
      body: 'Pandas| Sci-kit Learn | ML | Data Science',
      year: '',
      link: ''
    },
    {
      name: 'Data Structures in C Provided by Great Learning Academy',
      body: 'Data Structures | C',
      year: '',
      link: ''
    },
  ],
  education: [
    {
      institution: 'National Institute of Technology, Delhi',
      degree: 'Electronics and Communication Engineering CGPA : 7.83',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'National Institute of Technology, Delhi',
      degree: 'Artificial Intelligence and Machine Learning (MINOR)',
      from: '2023',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Algotrace',
      description:
        'A website to Track DSA Problems journey by using 150 Selected Problems from various Webistes',
      imageUrl: 'http://algotrace.tech/images/logo.png',
      link: 'https://algotrace.tech',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'krabhishek_', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
