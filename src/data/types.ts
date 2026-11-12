export type Company = 'Finyon Global' | 'Civicom' | 'School'

export interface Highlight {
  company: Company
  title: string
  before?: string
  after: string
  stack: string[]
}

/** One position held at an employer. */
export interface Role {
  period: string
  title: string
  tech: string[]
  key: string[]
  more: string[]
}

/** One employer card. Several roles at the same company share a single card. */
export interface Employer {
  company: string
  monogram: string
  /** Dates shown on the card header, for example the whole stay across all roles. */
  span: string
  roles: Role[]
  earlier?: boolean
}

/** One colored fragment of a code line: [css class, text]. */
export type Seg = ['k' | 's' | 'm' | '', string]

export type ProjectKind = 'Full-stack' | 'Backend' | 'Frontend'
export type DeployStatus = 'live' | 'repo' | 'wip' | 'tbd'

export interface RepoLink {
  label: string
  url: string
}

export interface Shot {
  src: string
  alt: string
  caption: string
}

export interface Project {
  title: string
  kind: ProjectKind
  year: string
  status: DeployStatus
  description: string
  /** Shown in the details window under "What it does". */
  bullets?: string[]
  /** Shown under "How I built it". */
  build?: string[]
  stack: string[]
  /** One button per repository, for example the frontend and the backend. */
  repos: RepoLink[]
  live?: string
  /** Path under /public, for example /projects/puptaps.jpg. Falls back to the code art when empty. */
  image?: string
  /** Real screenshots shown in the details window. Only for projects that are live. */
  gallery?: Shot[]
  art: Seg[][]
  featured?: boolean
}

export interface SkillGroup {
  title: string
  blurb: string
  icon: 'srv' | 'lay' | 'db' | 'team'
  skills: { name: string; work: boolean }[]
}
