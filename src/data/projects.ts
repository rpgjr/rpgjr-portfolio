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
    title: 'Piggie',
    kind: 'Full-stack',
    year: '2026',
    status: 'wip',
    featured: true,
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
    status: 'repo',
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
      [['m', '// status: applied · interview · offer']],
    ],
  },
  {
    title: 'PUP TAPS Alumni Portal',
    kind: 'Full-stack',
    year: '2023',
    status: 'tbd',
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
  {
    title: 'React To-do List',
    kind: 'Frontend',
    year: '2024',
    status: 'live',
    live: 'https://simple-todolist-rod.netlify.app/',
    image: '/projects/todo-home.jpg',
    gallery: [
      { src: '/projects/todo-home.jpg', alt: 'To-do app with a Get Things Done heading and a box to add a task', caption: 'Type a task and add it to the list' },
    ],
    description: 'Task list with add, edit and delete, built to practise state handling.',
    bullets: ['Add a task from the input at the top.', 'Edit or delete each task with the icons beside it.'],
    stack: ['React'],
    repos: [{ label: 'Code', url: old + 'react-todolist-app' }],
    art: [
      [['k', 'const'], ['', ' [todos, set] = useState([]);']],
      [['m', '// add · edit · delete']],
    ],
  },
  {
    title: 'React Weather App',
    kind: 'Frontend',
    year: '2024',
    status: 'live',
    live: 'https://simple-weatherapp-rod.netlify.app/',
    image: '/projects/weather-home.jpg',
    gallery: [
      { src: '/projects/weather-home.jpg', alt: 'Weather app showing 24 degrees in London with humidity and wind speed', caption: 'Search a city and see its temperature, humidity and wind speed' },
    ],
    description: 'Search a city and see current conditions from a public weather API.',
    bullets: ['Shows the temperature, humidity and wind speed for the city you search.'],
    stack: ['React', 'REST API'],
    repos: [{ label: 'Code', url: old + 'react-weather-app' }],
    art: [
      [['k', 'const'], ['', ' res = '], ['k', 'await'], ['', ' fetch(url);']],
      [['k', 'const'], ['', ' { main } = '], ['k', 'await'], ['', ' res.json();']],
      [['m', '// render temp, humidity']],
    ],
  },
  {
    title: 'Student CRUD',
    kind: 'Full-stack',
    year: '2024',
    status: 'repo',
    description: 'React front end with a Node API and MySQL for managing student records.',
    stack: ['React', 'Node.js', 'MySQL'],
    repos: [{ label: 'Code', url: old + 'Simple-Student-CRUD' }],
    art: [
      [['k', 'app'], ['', '.post('], ['s', '"/students"'], ['', ', (req,res) => {']],
      [['', '  db.query(sql, values);']],
      [['', '});']],
      [['m', '// create · read · update · delete']],
    ],
  },
  {
    title: 'Employee CRUD',
    kind: 'Backend',
    year: '2024',
    status: 'repo',
    description: 'Java application for creating, reading, updating and deleting employee records.',
    stack: ['Java'],
    repos: [{ label: 'Code', url: old + 'EmployeeCrud' }],
    art: [
      [['k', 'public'], ['', ' Employee save(Employee e) {']],
      [['', '  '], ['k', 'return'], ['', ' repo.save(e);']],
      [['', '}']],
      [['m', '// list · find · update · delete']],
    ],
  },
]

export const projectFilters = ['All', 'Full-stack', 'Backend', 'Frontend'] as const
