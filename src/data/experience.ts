import type { Employer } from './types'

/** Newest first. Put several roles in one employer when they were held at the same company. */
export const employers: Employer[] = [
  {
    company: 'Finyon Global',
    monogram: 'FG',
    span: 'Sep 2025 → Nov 2026',
    roles: [
      {
        period: 'Sep 2025 → Nov 2026',
        title: 'Junior Backend Engineer',
        tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Mockito', 'Postman'],
        key: [
          'Integrated multiple third-party payment providers, adding payment methods for merchants.',
          'Shipped merchant-level processor blocking and bank exclusions across routing and fallback.',
          'Built self-service IP whitelisting that removed a manual DBA process.',
        ],
        more: [
          'Added processor restriction and industry-type eligibility rules before payouts reach production.',
          'Flagged missing configuration at setup, before it can fail live transactions.',
          'Built TypeScript forms and views for operations workflows.',
          'Wrote and optimised MySQL queries for data fixes and incident response.',
          'Authored provider integration docs and Postman collections.',
          'Worked with external providers on specs and integration problems.',
          'Code reviews, feature branches and agile delivery.',
        ],
      },
    ],
  },
  {
    company: 'Civicom Pacific Corp.',
    monogram: 'CV',
    span: 'Jun 2024 → Sep 2025',
    roles: [
      {
        period: 'Jun 2024 → Sep 2025',
        title: 'Junior Software Engineer',
        tech: ['Java', 'Vue', 'MySQL', 'Hibernate', 'AWS'],
        key: [
          'Built a monitoring tool for employee task and attendance scores.',
          'Designed REST APIs connecting internal systems and worked on Salesforce and Dynamics CRM sync.',
          'Refactored frontend pages to Vue.js for reuse.',
        ],
        more: [
          'Built features across Java EE and Vue.js from product requirements.',
          'Fixed production issues, bugs and performance bottlenecks.',
          'Tuned MySQL queries and stored procedures.',
          'Provisioned AWS EC2 and deployed Java apps on WildFly.',
          'Sprint planning, stand-ups, code reviews and design discussions.',
        ],
      },
    ],
  },
  {
    company: 'Xtreme Offshore Outsourcing',
    monogram: 'XO',
    span: 'Feb → May 2024',
    roles: [
      {
        period: 'Apr → May 2024',
        title: 'Junior Software Developer',
        tech: ['ASP.NET', 'SQL'],
        key: [
          'Promoted from IT Trainee and offered a permanent role.',
          'Learned ASP.NET Core (Razor Pages, Blazor) and VB.NET.',
          'Reviewed code and contributed solutions for new features.',
        ],
        more: [],
      },
      {
        period: 'Feb → Mar 2024',
        title: 'IT Trainee',
        tech: ['Java', 'React', 'Node'],
        key: ['Worked across Java, React, Node, WordPress and MySQL on small projects.'],
        more: [],
      },
    ],
  },
  {
    company: 'iPhitech IT and Digital Solutions',
    monogram: 'iP',
    span: 'Internship',
    earlier: true,
    roles: [
      {
        period: 'Internship',
        title: 'Web Developer Intern',
        tech: ['PHP', 'React', 'Laravel'],
        key: ['Built sample pages in WordPress, Shopify and Laravel from UI designs.'],
        more: [],
      },
    ],
  },
]

export const techFilters = ['Java', 'Spring Boot', 'React', 'TypeScript', 'Vue', 'MySQL', 'Hibernate', 'AWS', 'Mockito', 'Postman']
