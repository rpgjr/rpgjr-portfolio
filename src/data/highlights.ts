import type { Highlight } from './types'

export const highlights: Highlight[] = [
  {
    company: 'Finyon Global',
    title: 'Payment provider integrations',
    before: 'Merchants had a limited set of payment methods.',
    after: 'Integrated multiple third-party providers over REST, adding methods for merchants, with API docs and Postman collections for each.',
    stack: ['Java 17', 'Spring Boot', 'REST', 'Postman'],
  },
  {
    company: 'Finyon Global',
    title: 'Merchant-level processor blocking',
    before: 'Blocking a processor for one merchant meant a code change and a deploy. Retries could silently bypass the block.',
    after: 'Operations block it themselves, instantly, and the rule holds across every routing and fallback path.',
    stack: ['Java 17', 'Spring Boot', 'MySQL', 'Mockito'],
  },
  {
    company: 'Finyon Global',
    title: 'Self-service IP whitelisting',
    before: 'A Slack request, then waiting on a DBA to edit data by hand.',
    after: 'Instant from the operations panel, consistent across two independently transacted schemas.',
    stack: ['Spring Boot', 'React', 'TypeScript', 'MySQL'],
  },
  {
    company: 'Finyon Global',
    title: 'Bank-level payout exclusions',
    before: 'A bank a processor could not settle with was found only after the provider rejected the payout.',
    after: 'Operations exclude banks per processor. The failure is prevented upstream and enforced on every retry path.',
    stack: ['Java 17', 'Spring Boot', 'MySQL'],
  },
  {
    company: 'Finyon Global',
    title: 'Processor restrictions and industry eligibility',
    before: 'Payouts could be routed to incompatible or unauthorized processors.',
    after: 'Eligibility rules stop them before they reach production.',
    stack: ['Java 17', 'Spring Boot'],
  },
  {
    company: 'Finyon Global',
    title: 'Setup-time configuration checks',
    before: 'Missing configuration showed up as errors in live transactions, then long troubleshooting.',
    after: 'Conflicts are flagged at setup so operations fix them before customers see an error.',
    stack: ['React', 'TypeScript', 'Spring Boot'],
  },
  {
    company: 'Civicom',
    title: 'Task and attendance monitoring tool',
    before: 'Discrepancies in employee scores were hard to spot.',
    after: 'A front-end tool visualises task and attendance scores so managers track performance and find discrepancies in real time.',
    stack: ['Vue.js', 'Java EE', 'MySQL'],
  },
  {
    company: 'Civicom',
    title: 'CRM integrations',
    after: 'Helped connect Salesforce and Microsoft Dynamics CRM and sync their data with internal systems.',
    stack: ['Java EE', 'REST', 'Salesforce', 'Dynamics'],
  },
  {
    company: 'Civicom',
    title: 'Frontend refactor to Vue.js',
    after: 'Moved frontend pages to Vue.js for modular, reusable components and faster feature delivery.',
    stack: ['Vue.js', 'JavaScript'],
  },
  {
    company: 'Civicom',
    title: 'REST APIs between internal systems',
    after: 'Designed and built APIs for efficient data fetching and integration between separate internal systems.',
    stack: ['Java EE', 'Hibernate', 'REST'],
  },
  {
    company: 'School',
    title: 'PUP TAPS Alumni Portal',
    after: 'Capstone: a portal that tracks whether PUP graduates work in a field aligned with their course and holds the forms for document requests and clearances. Designed the MySQL schema, built the interface with Laravel Livewire and was the main technical contact for the client.',
    stack: ['PHP Laravel', 'Livewire', 'MySQL'],
  },
]

export const companyMonogram: Record<string, string> = {
  'Finyon Global': 'FG',
  Civicom: 'CV',
  School: 'PUP',
}

export const companyFilters = ['All', 'Finyon Global', 'Civicom', 'School'] as const
export const VISIBLE_AT_FIRST = 6
