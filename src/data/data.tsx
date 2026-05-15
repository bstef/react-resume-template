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
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ben Stef',
  description: 'Ben Stef — Senior Infrastructure & Systems Engineer based in Little Falls, NJ.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
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
        I am a Senior Infrastructure &amp; Systems Engineer with 20+ years of experience across enterprise environments, e-Discovery platforms, and cloud-based observability solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me exploring <strong className="text-stone-100">NYC</strong> and all it has to offer — bagels, coffee, and everything in between — tinkering with{' '}
        <strong className="text-stone-100">tech</strong>, or traveling the <strong className="text-stone-100">world</strong> with my wife!
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume/Ben%20Stef%20Resume.pdf',
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
  description: `Infrastructure and systems engineering professional with 20+ years of experience across enterprise environments, e-Discovery platforms, and cloud-based observability solutions. Proven ability to design, deploy, and support complex systems at scale while driving cross-functional collaboration, documentation standards, and customer satisfaction.`,
  aboutItems: [
    {label: 'Location', text: 'Little Falls, NJ', Icon: MapIcon},
    {label: 'Age', text: '43', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Romanian / American', Icon: FlagIcon},
    {label: 'Interests', text: 'Photography, Traveling, Exploring local spots', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Illinois at Chicago', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'JP Morgan — Jersey City, NJ', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '☁️ Cloud & Infrastructure',
    skills: [
      {name: 'AWS', level: 8},
      {name: 'Azure', level: 7},
      {name: 'Google Cloud (GCP)', level: 6},
      {name: 'Terraform / IaC', level: 7},
      {name: 'VMware vSphere', level: 9},
    ],
  },
  {
    name: '📡 Observability & Monitoring',
    skills: [
      {name: 'Datadog', level: 9},
      {name: 'Grafana', level: 7},
      {name: 'Splunk', level: 6},
      {name: 'Zabbix', level: 6},
    ],
  },
  {
    name: '🏢 Enterprise Platforms',
    skills: [
      {name: 'Microsoft 365', level: 9},
      {name: 'Zoom (Admin / Engineer)', level: 9},
      {name: 'Active Directory & Entra', level: 8},
      {name: 'Microsoft Exchange', level: 8},
      {name: 'Cisco Networking', level: 7},
    ],
  },
  {
    name: '⚖️ e-Discovery',
    skills: [
      {name: 'Relativity / RelativityOne', level: 9},
      {name: 'BrainSpace', level: 8},
      {name: 'Nuix', level: 7},
      {name: 'Venio', level: 7},
    ],
  },
  {
    name: '🖥️ Systems & Storage',
    skills: [
      {name: 'Windows Server', level: 9},
      {name: 'Linux (RHEL)', level: 7},
      {name: 'Hyper-V', level: 8},
      {name: 'SQL Server', level: 7},
      {name: 'Dell EqualLogic / Compellent', level: 7},
    ],
  },
  {
    name: '🗣️ Languages',
    skills: [
      {name: 'English', level: 10},
      {name: 'Romanian', level: 10},
      {name: 'Spanish', level: 3},
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2007',
    location: 'University of Illinois at Chicago',
    title: 'Bachelor of Science in Electrical Engineering',
    content: <p>Minor in Economics. Studied core subjects including Circuit Analysis, Control Systems, Electromagnetics, Digital Signal Processing, Power Systems, and Microelectronics. First Place — UIC College of Engineering EXPO 2007, Category 9: User Interface and Education ("TypeMouse: Fully Functional Keyboard and Mouse in a Single-Handed Device").</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - Present',
    location: 'JP Morgan — Jersey City, NJ',
    title: 'Senior Infrastructure Engineer',
    content: (
      <p>
        Support the Employee Platforms division, maintaining collaboration and communication tools (Zoom, Microsoft Teams, and more) for ~350,000 JPMorgan employees globally.
        Authored and maintained Terraform infrastructure-as-code to deploy services and infrastructure on AWS.
        Partnered directly with Product Managers to translate business requirements into technical solutions, and provided architectural guidance to internal App Development teams.
        Implemented Zoom AI Companion, Zoom Events, and Exchange Calendar integration to improve employee experience.
      </p>
    ),
  },
  {
    date: 'January 2023 - April 2024',
    location: 'Datadog, Inc. — New York, NY',
    title: 'Senior Technical Solutions Engineer',
    content: (
      <p>
        Served as senior escalation point, collaborating with engineering teams to reproduce and resolve complex customer-reported issues across 600+ Datadog integrations.
        Specialized in the Agent Integrations team across infrastructure, cloud, web, metrics, and monitoring domains.
        Built internal sandbox environments on AWS, Azure, and GCP; authored knowledge base articles focused on Windows platform integrations (Active Directory, Windows Events, Deployments).
        Led daily team office hours sessions with Tech Solutions peers and L1 engineers.
      </p>
    ),
  },
  {
    date: 'August 2018 - December 2022',
    location: 'Consilio LLC / Inventus LLC — New York, NY',
    title: 'Systems Engineer — e-Discovery / Application Support Engineer',
    content: (
      <p>
        Served as primary escalation point for application issues including latency, performance bottlenecks, and hang-ups in Relativity, Relativity One, Venio, and LAW.
        Managed and administered the company-wide Zoom environment; assisted the InfoSec team with SOC 2 audit tasks including user access reviews and security remediation.
        Performed regular application upgrades (BrainSpace, Venio, Relativity) across production and test environments.
        Part of the global IT and infrastructure team focused on high-availability e-Discovery systems. Company subsequently merged with Legility LLC.
      </p>
    ),
  },
  {
    date: 'November 2013 - July 2018',
    location: 'George Jon & Associates, Inc. — Chicago, IL',
    title: 'Technical Advisor & Systems Engineer / System Analyst 3',
    content: (
      <p>
        Served as primary engineer for multiple client environments, managing all infrastructure, hardware, and licensing documentation.
        Provided SME expertise on e-Discovery infrastructure to clients across legal and financial sectors.
        Led incident response for production outages; coordinated with vendors (Microsoft, Dell, VMware) for escalations.
        Notable engagements: Relativity SQL performance tuning & database migrations; year-long on-site FX Trading Platform support (IBM Netezza) at a major NYC investment bank; 6-month European deployment leading infrastructure for a large-scale Relativity rollout.
      </p>
    ),
  },
  {
    date: 'March 2009 - October 2013',
    location: 'Quest Software / Dell Software — Buffalo Grove, IL',
    title: 'QA Analyst / Software QA Associate 2',
    content: (
      <p>
        Built and maintained VMware environments with multiple ESX/ESXi hosts, vCenters, and VM templates across iSCSI, Fiber, and SAS configurations.
        Wrote and reviewed product documentation, test cases, and acceptance test cases prior to each release.
        Conducted competitor analysis and performance benchmarking; analyzed and documented software defects with detailed reproduction steps.
        Gained specialized expertise in VSS backup solutions, testing functionality with vRanger Pro and Veeam.
      </p>
    ),
  },
  {
    date: 'May 2007 - December 2008',
    location: 'Novarra — Itasca, IL',
    title: 'QA Engineer & Deployment Engineer',
    content: (
      <p>
        Finalized software requirements and test plans based on customer specifications; traveled on-site to assess environments and validate deployments.
        Deployed operator-grade software into wireless carriers' networks across global clients in Hong Kong, Italy, Lithuania, and Turkey.
        Installed and configured proprietary software on blade servers (Tomcat) for performance and load testing on Linux.
      </p>
    ),
  },
  {
    date: 'January 2003 - February 2006',
    location: 'UIC College of Pharmacy — Chicago, IL',
    title: 'Computer Specialist',
    content: (
      <p>
        Provided helpdesk support for pharmacy faculty and students, troubleshooting hardware, network, and software issues.
        Maintained user accounts, installed network software, and repaired/installed PCs.
        Documented detailed resolution steps for recurring issues to build a departmental knowledge base.
      </p>
    ),
  },
];



/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Below are some ways to contact me and follow!',
  items: [
    {
      type: ContactType.Email,
      text: 'Send me an email',
      href: 'mailto:benjaminstef@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Little Falls, NJ, USA',
      href: 'https://www.google.com/maps/place/Little+Falls,+NJ',
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
