/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Eric Orozco",
  title: "Hi all, I'm Eric",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iFEfy8X2-oft0Srf1xxPpnzCVNIhKVAb/view?usp=drive_link",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bee1130",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "ericorozco1130@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {skillName: "Bootstrap",fontAwesomeClassname: "fab fa-bootstrap"},
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    { skillName: "Vue", fontAwesomeClassname: "fab fa-vuejs" },
    {skillName:"Angular",fontAwesomeClassname:"fab fa-angular"},
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "Sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {skillName:"Python",fontAwesomeClassname: "fab fa-python"},
    {skillName:"PHP",fontAwesomeClassname: "fab fa-php"},
    {skillName:"Laravel",fontAwesomeClassname: "fab fa-laravel"},
    {skillName:"AWS",fontAwesomeClassname: "fab fa-aws"},

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California",
      logo: require("./assets/images/californiaLogo.png"),
      subHeader: "Bachelor’s Degree in Computer Science",
      duration: "September 2008 - April 2013",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Uptycs",
      companylogo: require("./assets/images/uptycsLogo.png"),
      date: "October 2021 – January 2024",
      // desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Building the user interface for the first software security platform that enables both cloud and endpoint security from a common, open-source solution.",
        "Responsible for development of dashboards that are used by security professionals to diagnose and treat vulnerabilities in their software infrastructure.",
        "Served as the architect and technical lead for the implementation of a client-side data caching solution.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Capgemini",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "July 2016 – September 2021",
      
      descBullets: [
        "Created internal design system with React, TailwindCSS, SASS, Material UI and Bootstrap and used Storybook for presentation and visual testing.",
        "Migrated legacy single page applications using NextJS.",
        "Implemented real time chat system using WebSocket and integrated GraphQL layers.",
        "Managed AWS resources like EC2, S3, CloudFront to deploy React applications.",
      ],
      
    },
    {
      role: "Senior Frontend Engineer",
      company: "Indiegogo",
      companylogo: require("./assets/images/indiegogoLogo.png"),
      date: "April 2015 – July 2016",
      descBullets:[
        "Rebuilt the frontend with React based Single Page Application.",
        "Implemented store management system using Redux.",
        "Created shared components for admin portal and customer platform."
      ]
    },
    {
      role: "Frontend Engineer",
      company: "Indiegogo",
      companylogo: require("./assets/images/indiegogoLogo.png"),
      date: "June 2013 – March 2015",
      descBullets:[
        "Built customer facing crowdfunding platform.",
        "Built admin portal that manages events, transactions and statistics.",
        "Created jQuery plugins for charts, tables and other visualization tools."
      ]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "fa",
      //   },
      //   //  you can add extra buttons here.
      // ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "",
      //   },
      // ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },  
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(443) 579 7520",
  email_address: "ericorozco1130@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
