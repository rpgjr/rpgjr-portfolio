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
    title: 'Mirana',
    kind: 'Full-stack',
    year: '2026',
    status: 'live',
    live: 'https://rpgjr-mirana.vercel.app',
    description:
      'A ticket tracker for software teams. Projects have a Kanban board, tickets link to GitHub pull requests, and sign-in is protected with email codes.',
    bullets: [
      'Boards with draggable columns and tickets, plus a list view and ticket comments.',
      'GitHub webhooks link pull requests to tickets, with signature checks on each delivery.',
      'Sign-in with email one-time codes, trusted devices and password reset.',
      'Project members and invites, with an activity history on every ticket.',
    ],
    image: '/projects/mirana-board.jpg',
    gallery: [
      { src: '/projects/mirana-board.jpg', alt: 'Mirana Kanban board with columns of tickets', caption: 'Board: tickets in columns, dragged between stages' },
      { src: '/projects/mirana-list.jpg', alt: 'Mirana list view of project tickets', caption: 'List: the same tickets as a sortable list' },
      { src: '/projects/mirana-ticket.jpg', alt: 'Mirana ticket detail with comments and linked pull requests', caption: 'Ticket: details, comments and linked pull requests' },
      { src: '/projects/mirana-login.jpg', alt: 'Mirana sign-in form with email and password fields', caption: 'Sign-in: email and password, then an email code on a new device' },
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'TypeScript', 'Docker'],
    repos: [
      { label: 'Frontend', url: main + 'mirana-ui' },
      { label: 'Backend', url: main + 'mirana' },
    ],
    art: [
      [['m', '// mirana · ticket tracker']],
      [['k', 'POST'], ['', ' /api/github/webhook  '], ['m', '// PR links']],
      [['k', 'table'], ['', ' ticket, board_column']],
      [['m', '// live on vercel']],
    ],
  },
  {
    title: 'mepmep',
    kind: 'Full-stack',
    year: '2026',
    status: 'live',
    live: 'https://mepmep.vercel.app',
    image: '/projects/mepmep-home.jpg',
    video: { src: '/projects/mepmep-showcase.mp4', poster: '/projects/mepmep-home.jpg', ratio: '16 / 9', caption: 'Showcase: sign up, browse, save to a list and watch' },
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
    status: 'live',
    description:
      'A job application tracker that runs as a Mac app on my own MacBook, so it has no public link. It records each application and its status, and a page scraper with Gemini-assisted field mapping helps fill in details from a job posting.',
    bullets: [
      'Calendar and list views of every application, with search, filters and sorting.',
      'Paste a job link and the form fills itself in, with Gemini suggesting fields it could not find.',
      'Custom statuses and tags, with light and dark themes.',
      'Native SwiftUI app talking to a Spring Boot API and MySQL.',
    ],
    image: '/projects/hophop-calendar.jpg',
    video: { src: '/projects/hophop-walkthrough.mp4', poster: '/projects/hophop-calendar.jpg', ratio: '16 / 10', caption: 'Walkthrough: sign in, add an application from a job link, then filter and review' },
    gallery: [
      { src: '/projects/hophop-signin.jpg', alt: 'hophop sign-in screen', caption: 'Sign-in: the app opens on a login screen' },
      { src: '/projects/hophop-calendar.jpg', alt: 'hophop calendar with a count of applications on each day', caption: 'Calendar: how many applications went out each day' },
      { src: '/projects/hophop-day.jpg', alt: 'hophop list of applications for one day', caption: 'Day: the applications for one date, with their status' },
      { src: '/projects/hophop-add.jpg', alt: 'hophop add application form filled in from a job link', caption: 'Add: paste a job link and the fields fill in, ready to check' },
      { src: '/projects/hophop-details.jpg', alt: 'hophop details of one application', caption: 'Details: everything saved about one application' },
      { src: '/projects/hophop-all.jpg', alt: 'hophop table of all applications with status, setup and salary', caption: 'All applications: search, sort and see status, setup and salary' },
      { src: '/projects/hophop-filters.jpg', alt: 'hophop applications list with filters applied', caption: 'Filters: narrow the list by status, setup and more' },
      { src: '/projects/hophop-settings.jpg', alt: 'hophop settings page for tags', caption: 'Settings: tags, statuses and general options' },
      { src: '/projects/hophop-dark.jpg', alt: 'hophop calendar in the dark theme', caption: 'Dark theme: the same calendar in dark' },
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'Swift', 'SwiftUI'],
    repos: [
      { label: 'Mac app', url: main + 'hophop-mac' },
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
