import type { Project } from './types'

const main = 'https://github.com/rpgjr/'
const old = 'https://github.com/rodrigogenetajr/'

/**
 * Add a project here and it appears on the page. Featured first, then the scrolling row in this order.
 * - image: put a screenshot in /public/projects and set '/projects/name.jpg'
 * - status: 'live' (deployed), 'repo' (code only), 'wip' (in development), 'tbd' (not confirmed yet)
 * - live: deployed URL, shown as a "Live demo" button
 * - repos: one button per repository
 */
export const projects: Project[] = [
  {
    title: 'CARPS',
    kind: 'Full-stack',
    year: '2026',
    status: 'wip',
    featured: true,
    description:
      'A mobile app for groups travelling together. A host starts a session, friends join with a 6-character code, and everyone sees each other live on one shared map and follows the same route. Currently in development.',
    bullets: [
      'Join a session with a short code and a name, with no account to create.',
      'See every friend live on a shared map, with last-seen times when someone drops off.',
      'Only the host sets the destination, and everyone sees the same route line.',
      'A Navigate button opens Google Maps so the group merges onto the host\'s road.',
      'Travel modes for walking, motorcycle rides and car convoys, each with its own alerts.',
    ],
    stack: ['Flutter', 'Firebase', 'Google Maps'],
    repos: [],
    art: [
      [['m', '// carps · travel together, live']],
      [['k', 'session'], ['', '  AB12CD']],
      [['k', 'members'], ['', '  live positions']],
      [['k', 'route'], ['', '    host sets it, all follow']],
      [['m', '// in development']],
    ],
  },
  {
    title: 'Piggie',
    kind: 'Full-stack',
    year: '2026',
    status: 'wip',
    description:
      'A budget and expense tracker, split into a backend repository and a frontend repository. Currently in development, with the code not published yet.',
    stack: [],
    repos: [
      { label: 'Frontend', url: main + 'piggie-ui' },
      { label: 'Backend', url: main + 'piggie' },
    ],
    art: [
      [['m', '// piggie · budget and expense tracker']],
      [['k', 'backend'], ['', '   piggie']],
      [['k', 'frontend'], ['', '  piggie-ui']],
      [['m', '// in development']],
    ],
  },
  {
    title: 'mepmep',
    kind: 'Full-stack',
    year: '2026',
    status: 'live',
    live: 'https://mepmep.vercel.app',
    image: '/projects/mepmep-home.jpg',
    gallery: [
      { src: '/projects/mepmep-home.jpg', alt: 'mepmep home page with a trending banner and a row of trending movies', caption: 'Home: a trending banner and rows of popular titles' },
      { src: '/projects/mepmep-movies.jpg', alt: 'mepmep movies page with genre and sort filters above a grid of posters', caption: 'Movies: browse by genre and sort order' },
      { src: '/projects/mepmep-series.jpg', alt: 'mepmep series page with a grid of TV show posters', caption: 'Series: the same browsing for TV shows' },
      { src: '/projects/mepmep-login.jpg', alt: 'mepmep login form with email and password fields', caption: 'Login: email and password, with a link to create an account' },
      { src: '/projects/mepmep-register.jpg', alt: 'mepmep registration form with display name, email and password fields', caption: 'Registration: create an account to save favorites and pick up where you left off' },
    ],
    description:
      'A movie site with login, favorites, a to-watch list and continue-watching, built on a backend that proxies the TMDB movie database.',
    bullets: [
      'Spring Boot 3.5 and Java 25 API with JWT login and MySQL, tested against in-memory H2.',
      'Pipeline on every pull request: tests, Docker image build with Trivy scan, CodeQL and secret scanning.',
      'React and TypeScript front end with shadcn/ui and Playwright end-to-end tests.',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'TypeScript', 'Tailwind', 'Docker'],
    repos: [
      { label: 'Frontend', url: main + 'mepmep-ui' },
      { label: 'Backend', url: main + 'mepmep' },
    ],
    art: [
      [['m', '// mepmep · movie site']],
      [['k', 'POST'], ['', ' /api/auth/login']],
      [['k', 'GET'], ['', '  /api/movies/popular  '], ['m', '// TMDB proxy']],
      [['k', 'GET'], ['', '  /api/favorites']],
    ],
  },
  {
    title: 'hophop',
    kind: 'Full-stack',
    year: '2026',
    status: 'wip',
    description:
      'A job application tracker. It records each application and its status, and a page scraper with Gemini-assisted field mapping helps fill in details from a job posting.',
    bullets: [
      'Applications with statuses, employment type, work setup and currency.',
      'Site mappings that record where each field sits on a job page.',
      'Gemini suggests mappings from the page content.',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'TypeScript', 'Tailwind', 'daisyUI'],
    repos: [
      { label: 'Frontend', url: main + 'hophop-ui' },
      { label: 'Backend', url: main + 'hophop' },
    ],
    art: [
      [['m', '// hophop · job application tracker']],
      [['k', 'GET'], ['', '  /api/applications']],
      [['k', 'POST'], ['', ' /api/site-mappings  '], ['m', '// scraper']],
      [['m', '// in development']],
    ],
  },
  {
    title: 'PUPT APS',
    kind: 'Full-stack',
    year: '2023',
    status: 'repo',
    description:
      'Capstone at Polytechnic University of the Philippines, Taguig. A portal for PUP alumni and graduating students that keeps their information, forms and requests in one place. I was the full-stack developer and the main technical contact for the client.',
    bullets: [
      'Tracks whether an alumnus\'s current job still aligns with the course they graduated from.',
      'Holds the alumni information forms and a list of graduates with their details.',
      'Gives alumni a form to answer before they request a document.',
      'Holds the form that graduating students answer before their clearance is signed.',
      'Sends reports to the admins.',
    ],
    build: [
      'Designed and normalised the MySQL schema for large datasets.',
      'Livewire for a live interface with fewer page reloads and no separate JS framework.',
      'Turned client requirements into specs and iterated through rapid prototypes.',
    ],
    stack: ['PHP Laravel', 'Livewire', 'MySQL', 'Tailwind', 'Vite'],
    repos: [{ label: 'Code', url: old + 'puptaps' }],
    art: [
      [['m', '// puptaps · alumni records']],
      [['k', 'php'], ['', ' artisan migrate']],
      [['k', 'php'], ['', ' artisan serve']],
      [['m', '// courses · alumni · forms · news']],
      [['k', 'wire:model.live'], ['', '='], ['s', '"search"']],
    ],
  },
]

export const projectFilters = ['All', 'Full-stack', 'Backend', 'Frontend'] as const
