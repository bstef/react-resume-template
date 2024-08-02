import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ben Stef',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ben Stef.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a Technology Evangelist & Systems Engineer with extensive Technical Support knowledge & experience. In other words…I am what some people may call a "Jack-of-all trades" technologist!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me enjoyiing time exploring <strong className="text-stone-100">NYC</strong> and all that it offers including bagels and coffee,working on <strong className="text-stone-100">Tech Stuff</strong>, or traveling the {' '}
        <strong className="text-stone-100">world</strong>  with my wife!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With over 18 years of experience in Technical Support and Information Technology, I am passionate about leveraging my skills to solve complex technical issues and enhance user experiences. My expertise spans across troubleshooting, system administration, network management, and customer service, making me a versatile and reliable IT professional.
`,
  aboutItems: [
    {label: 'Location', text: 'New York, NY', Icon: MapIcon},
    {label: 'Age', text: '41', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Romanian / American', Icon: FlagIcon},
    {label: 'Interests', text: 'Photography, Traveling, Exploring local spots', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Illinois at Chicago', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'JP Morgan', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Romanian',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Technical Support',
    skills: [
      {
        name: 'Troubleshooting & Triage',
        level: 9,
      },
      {
        name: 'Optimization',
        level: 7,
      },
      {
        name: 'Configuration',
        level: 9,
      },
    ],
  },
  {
    name: 'System Administration',
    skills: [
      {
        name: 'Network',
        level: 8,
      },
      {
        name: 'Systems Configuration',
        level: 5,
      },
      {
        name: 'Resiliency',
        level: 4,
      },
    ],
  },
  {
    name: 'Customer Service',
    skills: [
      {
        name: 'Documentation',
        level: 9,
      },
      {
        name: 'Personable',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2007',
    location: 'University of Illinois at Chicago',
    title: 'Bachelor of Science in Eletrical Engineering',
    content: <p>Studied core subjects including Circuit Analysis, Control Systems, Electromagnetics, Digital Signal Processing, Power Systems, and Microelectronics</p>,
  },
  {
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - Present',
    location: 'JP Morgan',
    title: 'Senior Infrastrucutre Engineer',
    content: (
      <p>
Supporting the organization's Employee Platforms as an Infrastructure Engineer by maintaining the company's communication and collaboration systems such as Zoom, Adobe Connect, Cisco Call Manager, and other Enterprise Video & Voice platforms for all of JPMorgan employees (~300k).
Assisting the Communication and Collaboration Product Managers and Platform Owners by making sure the platforms follow their respective timelines.
Providing assistance and support for the SaaS applications by maintaining documentation, system patches.
Providing guidance and feedback with the internal App Development team on system architecture and design input as well as user experience excellence.
      </p>
    ),
  },
  {
    date: 'January 2023 - April 2024',
    location: 'Datadog',
    title: 'Senior Technical Solutions Engineer',
    content: (
      <p>
Provided Datadog customer’s technical support for implementing the Datadog solution into their environments. Extensive suport with the Datadog Agent and the many (600+) integrations that Datadog platform supports.
Provided expertise knowledge on Microsoft Windows platform and how customers can integrate Datadog monitoring using that Operating System.
Created escalations for the software engineering team to review and related issues or bugs.
Updated documentation internal and external for clarity and knowledge share.
Led office hours for other solutions engineers to provide them guidance and assistance with their customer issues.
      </p>
    ),
  },
  {
    date: 'January 2021 - December 2022',
    location: 'Consilio',
    title: 'Application Support Engineer',
    content: (
      <p>
Provided Application Support to numerous internal and client facing applications.Supported companies eDiscovery platforms such as Relativity, Reltivity one, Venio 
Maintained application documentation and how to guides for end users and external users. Performed routine maintenance and application updates on maintenance windows and planned outages
Systems infrastructure for these applications included Windows Server, RedHat Linux, Webserver technologies likes IIS,Apache Tomcat. Collaborated with the Application support team members (roughly 2 dozen engineers)
Engaged company technology departments such as Database Administration, Network Administration, Systems Administration, and Helpdesk to provided cross collaboration and support. Became subject matter expert for a few applications like Venio, Recenseo and Relativity and RelativityOne
      </p>
    ),
  },
  {
    date: 'January 2020 - December 2021',
    location: 'Legility',
    title: 'Application Support Specialist',
    content: (
      <p>
Supported other IT departments environments including servers, networking, virtualization platforms (VMWare & Hyper-V) storage and helpdesk team
Maintained Company wide SaaS applications such as Microsoft Office 365, Zoom, SpamTitan, Intune, IBM Maas360, and others.
Worked with SaaS vendors to provide company wide support for SaaS applications.
Became a point of escalation and subject matter expert (SME) for these applications by troubleshooting issues like performance latency, application bottlenecks and
Assisted Security Team with Audits for SOC2 and IS9001 compliance with Security questions and security evidence.
      </p>
    ),
  },
  {
    date: 'August 2018 - December 2019',
    location: 'Inventus',
    title: 'Systems Engineer',
    content: (
      <p>
Member of the Global IT Infrastructure Team. Supported the local NYC office with IT task such as desktop Management, Network administration, Physical Security and Helpdesk.
Supported multiple company environments local and abroad including Managed Service Environments. Performed routine maintenance checks and system patches on systems.
Also worked on supporting the company's eDiscovery platforms and systems. Provided support to DevOps team for optimizing internal applications and systems
Assisted Security team with questionnairesMember of the Global IT Infrastructure Team. Supported the local NYC office with IT task such as desktop Management, Network administration, 
Physical Security and Helpdesk. Supported multiple company environments local and abroad including Managed Service Environments Performed routine maintenance checks and system patches on systems. 
Also worked on supporting the company's eDiscovery platforms and systems. 
Provided support to DevOps team for optimizing internal applications and systems Assisted Security team with questionnaires
      </p>
    ),
  },
  {
    date: 'November 2013 - August 2018',
    location: 'George Jon & Associates',
    title: 'Information Technology Support Analyst & Systems Engineer',
    content: (
      <p>
Worked in a highly dynamic fast paced environment as a Systems analyst and Helpdesk technician concentrating on Clustered SQL Servers and e-discovery using kCura's Relativity platform.
I maintain Relativity from importing, archiving and troubleshooting Relativity issues and setting up new instances of databases and environments.
      </p>
    ),
  },
  {
    date: 'September 2012 - October 2013',
    location: 'George Jon & Associates',
    title: 'IT Support Analyst & Systems Engineer',
    content: (
      <p>
Quality Assurance Engineer for Data Protection products including vRanger.
Wrote and executed quality assurance test plans.
Provided customer support team escalation support for any software related issues.
Led QA sprints and scrums
Gave input to optimize QA workflows
Worked under tight deadlines and followed company SDLC guidelines 
      </p>
    ),
  },
  {
    date: 'March 2009 - September 2012',
    location: 'Quest Software',
    title: 'Quality Assurance Engineer',
    content: (
      <p>
Part of a small integrated team that gets our solution deployed to customer by testing handsets and getting end product to user.
Under Deployment: wrote test plans and documentation for released products, go on-site to test and work with customer to install and deploy Novarra’s software into the carriers network and have it deployed to end user.
Under QA: Performed load run tests on server product conducted quality assurance (QA) tests of end user product J2ME and BREW platforms and diagnosed and reported visual and system problems on cellular phone devices. Made sure that product was approved to be released to customer(s). Maintained Linux servers and test lab.
      </p>
    ),
  },
  {
    date: 'May 2005 - December 2008',
    location: 'Novarra',
    title: 'Quality Assurance Deployment Engineer',
    content: (
      <p>
As part Vizioncore Inc. offers a full range of strategic software solutions that allow you to oversee and enhance the performance of virtualized environments. Vizioncore products are simple to use and cost effective, yet offer sophisticated functionality to address the challenges of P2V/V2V conversions, disaster recovery, storage optimization, process automation and provisioning, and performance monitoring and chargeback.
Was responsible for the quality assurance in the Data Protection group. Worked especially on the quality of vRanger Pro product as well as functionality with other server grade products like Exchange and SQL Active Directory.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'bobby@journeyjedi.net',
      href: 'mailto:bobby@journeyjedi.net',
    },
    {
      type: ContactType.Location,
      text: 'New York, NY, USA',
      href: 'https://www.google.com/maps/@40.7473613,-73.9830134,12.5z?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@bstef',
      href: 'https://www.instagram.com/bstef/',
    },
    {
      type: ContactType.Github,
      text: 'bstef',
      href: 'https://github.com/bstef',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bstef'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/6431192/ben-stef'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bstef/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bstef/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/bstef'},
];
