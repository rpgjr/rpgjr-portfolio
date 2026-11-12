import type { SkillGroup } from './types'

const w = (name: string) => ({ name, work: true })
const s = (name: string) => ({ name, work: false })

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    blurb: 'The server side: business rules, APIs and connections to other systems.',
    icon: 'srv',
    skills: [w('Java'), w('Spring Boot'), w('Java EE'), w('Hibernate'), w('REST APIs'), w('Mockito tests'), s('PHP Laravel')],
  },
  {
    title: 'Frontend',
    blurb: 'The screens people click through: forms, tables and dashboards.',
    icon: 'lay',
    skills: [w('React'), w('TypeScript'), w('Vue.js'), w('CSS'), s('Laravel Livewire')],
  },
  {
    title: 'Data and cloud',
    blurb: 'Where information is stored and how applications are hosted.',
    icon: 'db',
    skills: [w('MySQL'), w('AWS EC2'), w('WildFly Server')],
  },
  {
    title: 'Ways of working',
    blurb: 'Habits that keep a team shipping and the code easy to maintain.',
    icon: 'team',
    skills: [w('Git and GitHub'), w('Code reviews'), w('Postman API testing'), w('Agile sprints'), w('Technical documentation')],
  },
]

export const workingAgreement = [
  { icon: 'test', title: 'Change ships with proof', text: 'Mockito unit tests for new features, bug fixes and integrations, and Postman collections with request and response examples.' },
  { icon: 'doc', title: 'Knowledge leaves my head', text: 'Every payment provider integration gets API specs, config steps and usage examples, so the next person can maintain it.' },
  { icon: 'team', title: 'Direct with external teams', text: 'I worked straight with payment providers to align specs and debug integration problems end to end.' },
  { icon: 'branch', title: 'Small, reviewable changes', text: 'Feature branches, code reviews on both sides, agile sprints and incremental delivery.' },
] as const
