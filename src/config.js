module.exports = {
  siteTitle: 'Nnadi Charles',
  siteDescription:
    'Nnadi Charles is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Nnadi Charles, solidity, blockchain, fullstack developer, react.js, next.js, typescript, rust, hardhat, openzeppelin, chainlink, moralis, ethers.js, nx.dev',
  siteUrl: 'https://nnadi.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Nnadi .C Charles',
  email: 'beekyhe@gmail.com',
  github: 'https://github.com/Chimennadi',
  twitterHandle: '@beekyhe',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Chimennadi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nnadi-c-charles-9a774b212/',
    },
    {
      name: 'Telegram',
      url: 'https://twitter.com/beekyhe?t=yl5dBNP87RVXrusq9vLttw&s=09',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
