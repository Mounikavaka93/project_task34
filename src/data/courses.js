export const instructors = [
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Senior Frontend Engineer',
    bio: 'Priya has spent 12 years building product interfaces at high-growth startups and now teaches React with a focus on real-world architecture.',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    students: 45280,
    courses: 8,
    expertise: ['React', 'JavaScript', 'UI Engineering'],
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Data Science Lead',
    bio: 'Former research scientist turned educator. Marcus helps learners turn messy datasets into decisions they can defend.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    students: 38120,
    courses: 6,
    expertise: ['Python', 'Machine Learning', 'SQL'],
  },
  {
    id: 'aisha-rahman',
    name: 'Aisha Rahman',
    title: 'Product Designer',
    bio: 'Aisha designs learning products used by millions and teaches design thinking as a practical craft, not a buzzword.',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    students: 29440,
    courses: 5,
    expertise: ['Figma', 'UX Research', 'Design Systems'],
  },
  {
    id: 'daniel-okonkwo',
    name: 'Daniel Okonkwo',
    title: 'Strategy Consultant',
    bio: 'Daniel has advised founders across three continents. His courses turn business theory into operating playbooks.',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    students: 22190,
    courses: 4,
    expertise: ['Strategy', 'Leadership', 'Operations'],
  },
  {
    id: 'elena-rossi',
    name: 'Elena Rossi',
    title: 'Growth Marketer',
    bio: 'Elena built growth teams at two SaaS unicorns and now teaches campaigns that compound instead of just going viral.',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    students: 31870,
    courses: 7,
    expertise: ['SEO', 'Content', 'Paid Growth'],
  },
  {
    id: 'hiro-tanaka',
    name: 'Hiro Tanaka',
    title: 'Full-Stack Architect',
    bio: 'Hiro ships production systems for fintech and teaches backend design with the same discipline he uses at work.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    students: 26750,
    courses: 5,
    expertise: ['Node.js', 'APIs', 'Cloud'],
  },
]

export const categories = [
  { id: 'all', name: 'All Courses' },
  { id: 'development', name: 'Development' },
  { id: 'design', name: 'Design' },
  { id: 'business', name: 'Business' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'data-science', name: 'Data Science' },
]

export const courses = [
  {
    id: 'react-mastery',
    title: 'Complete React.js Mastery',
    instructorId: 'priya-sharma',
    thumbnail:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80',
    category: 'development',
    rating: 4.8,
    reviews: 2841,
    duration: '32h 15m',
    lectures: 186,
    level: 'Intermediate',
    price: 49.99,
    originalPrice: 89.99,
    isFree: false,
    students: 18420,
    language: 'English',
    lastUpdated: 'September 2026',
    popular: true,
    description:
      'Build production-ready React applications from component design to data fetching, routing, and performance. This course is structured around real product features rather than isolated snippets.',
    learningOutcomes: [
      'Design reusable component systems with modern React patterns',
      'Manage complex client state without over-engineering',
      'Ship accessible, responsive interfaces used on real devices',
      'Connect APIs, handle loading states, and recover from errors',
      'Optimize rendering and bundle size for faster page loads',
      'Publish a polished portfolio project by the final module',
    ],
    curriculum: [
      {
        title: 'Foundations and tooling',
        duration: '3h 10m',
        lessons: [
          { title: 'How modern React apps are structured', duration: '18m' },
          { title: 'Vite, linting, and a clean folder layout', duration: '24m' },
          { title: 'JSX, props, and composition', duration: '32m' },
        ],
      },
      {
        title: 'Interactive interfaces',
        duration: '6h 40m',
        lessons: [
          { title: 'State, effects, and derived data', duration: '41m' },
          { title: 'Forms that feel fast and honest', duration: '36m' },
          { title: 'Building a course catalog UI', duration: '48m' },
        ],
      },
      {
        title: 'Routing and data',
        duration: '7h 05m',
        lessons: [
          { title: 'Client-side routing for learning platforms', duration: '29m' },
          { title: 'Fetching, caching, and empty states', duration: '44m' },
          { title: 'Protected dashboard routes', duration: '27m' },
        ],
      },
      {
        title: 'Capstone: Learnify classroom',
        duration: '8h 20m',
        lessons: [
          { title: 'Progress tracking and certificates', duration: '38m' },
          { title: 'Performance pass and polish', duration: '33m' },
          { title: 'Launch checklist', duration: '21m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Sofia Alvarez',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Aug 12, 2026',
        text: 'The projects feel like real product work. I finally understand when not to add another library.',
      },
      {
        name: 'Jonah Blake',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Jul 28, 2026',
        text: 'Clear pacing, excellent Figma-to-code examples, and a dashboard module I reused at work.',
      },
      {
        name: 'Meera Iyer',
        avatar:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
        rating: 4,
        date: 'Jul 3, 2026',
        text: 'Would love even more testing content, but the UI patterns alone were worth it.',
      },
    ],
  },
  {
    id: 'python-data-lab',
    title: 'Python for Data Analysis Lab',
    instructorId: 'marcus-chen',
    thumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    category: 'data-science',
    rating: 4.9,
    reviews: 3210,
    duration: '28h 40m',
    lectures: 154,
    level: 'Beginner',
    price: 39.99,
    originalPrice: 79.99,
    isFree: false,
    students: 22110,
    language: 'English',
    lastUpdated: 'August 2026',
    popular: true,
    description:
      'Learn Python through datasets you can actually explain. From pandas wrangling to visual stories, this lab turns analysis into a repeatable workflow.',
    learningOutcomes: [
      'Clean and reshape tabular data with pandas',
      'Visualize findings that non-technical teammates can follow',
      'Ask better questions before writing the first query',
      'Build a personal analysis notebook portfolio',
      'Spot leakage, bias, and misleading charts',
      'Present insights in a short stakeholder brief',
    ],
    curriculum: [
      {
        title: 'Python that gets out of the way',
        duration: '4h 15m',
        lessons: [
          { title: 'Notebooks, environments, and habits', duration: '22m' },
          { title: 'Collections and control flow in practice', duration: '31m' },
        ],
      },
      {
        title: 'Pandas studio',
        duration: '8h 50m',
        lessons: [
          { title: 'Joins, groups, and time series', duration: '46m' },
          { title: 'Missing data without panic', duration: '28m' },
        ],
      },
      {
        title: 'From chart to narrative',
        duration: '6h 20m',
        lessons: [
          { title: 'Choosing the right visual', duration: '24m' },
          { title: 'Capstone: campus learning analytics', duration: '51m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Chris Lang',
        avatar:
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Sep 2, 2026',
        text: 'I came in afraid of Python and left with a dashboard my manager still uses.',
      },
      {
        name: 'Noura Haddad',
        avatar:
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Aug 19, 2026',
        text: 'The datasets feel current. Marcus explains the why, not just the syntax.',
      },
    ],
  },
  {
    id: 'figma-product-design',
    title: 'Figma Product Design Studio',
    instructorId: 'aisha-rahman',
    thumbnail:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80',
    category: 'design',
    rating: 4.8,
    reviews: 1984,
    duration: '21h 05m',
    lectures: 112,
    level: 'Beginner',
    price: 0,
    originalPrice: 0,
    isFree: true,
    students: 31240,
    language: 'English',
    lastUpdated: 'September 2026',
    popular: true,
    description:
      'Design a complete learning product in Figma: research notes, flows, components, and a handoff that developers will actually thank you for.',
    learningOutcomes: [
      'Run lightweight research that changes the interface',
      'Build a scalable Figma component library',
      'Prototype realistic student and instructor journeys',
      'Write design decisions that survive critique',
      'Prepare developer-ready specs and tokens',
      'Present a case study employers can scan in two minutes',
    ],
    curriculum: [
      {
        title: 'Seeing the learner',
        duration: '3h 40m',
        lessons: [
          { title: 'Jobs to be done for students', duration: '26m' },
          { title: 'Audit an existing course page', duration: '19m' },
        ],
      },
      {
        title: 'System and screens',
        duration: '9h 10m',
        lessons: [
          { title: 'Auto layout that stays maintainable', duration: '34m' },
          { title: 'Designing the Learnify dashboard', duration: '47m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Leo Martins',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Sep 8, 2026',
        text: 'Free and still one of the most rigorous design courses I have taken.',
      },
    ],
  },
  {
    id: 'growth-marketing-lab',
    title: 'Modern Growth Marketing Lab',
    instructorId: 'elena-rossi',
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    category: 'marketing',
    rating: 4.7,
    reviews: 1560,
    duration: '18h 30m',
    lectures: 97,
    level: 'Intermediate',
    price: 44.99,
    originalPrice: 69.99,
    isFree: false,
    students: 14280,
    language: 'English',
    lastUpdated: 'July 2026',
    popular: true,
    description:
      'Plan, ship, and measure campaigns for an education brand. You will leave with a growth calendar, creative tests, and a reporting rhythm.',
    learningOutcomes: [
      'Map acquisition channels to learning intent',
      'Write landing pages that convert curious browsers',
      'Run creative tests without drowning in dashboards',
      'Build a 90-day growth calendar',
      'Attribute sign-ups without fake precision',
      'Brief designers and instructors like a partner',
    ],
    curriculum: [
      {
        title: 'Positioning an education brand',
        duration: '4h 05m',
        lessons: [
          { title: 'Offers students actually want', duration: '23m' },
          { title: 'Messaging that is specific, not loud', duration: '27m' },
        ],
      },
      {
        title: 'Campaign studio',
        duration: '8h 15m',
        lessons: [
          { title: 'SEO for course discovery', duration: '36m' },
          { title: 'Paid experiments on a small budget', duration: '41m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Hannah Cole',
        avatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
        rating: 4,
        date: 'Jun 21, 2026',
        text: 'Practical templates. I reused the campaign brief the same week.',
      },
    ],
  },
  {
    id: 'business-strategy',
    title: 'Business Strategy for Builders',
    instructorId: 'daniel-okonkwo',
    thumbnail:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    category: 'business',
    rating: 4.6,
    reviews: 980,
    duration: '16h 20m',
    lectures: 84,
    level: 'All levels',
    price: 34.99,
    originalPrice: 59.99,
    isFree: false,
    students: 10240,
    language: 'English',
    lastUpdated: 'June 2026',
    popular: false,
    description:
      'A compact strategy course for people who ship products. Learn how to choose markets, price learning offers, and make trade-offs you can explain.',
    learningOutcomes: [
      'Write a one-page strategy that a team can execute',
      'Price courses and cohorts with intention',
      'Spot weak unit economics early',
      'Run a useful quarterly review',
      'Translate customer interviews into bets',
      'Defend a roadmap without theatre',
    ],
    curriculum: [
      {
        title: 'Choosing where to play',
        duration: '5h 10m',
        lessons: [
          { title: 'Market maps without the jargon', duration: '29m' },
          { title: 'Competitive reality check', duration: '22m' },
        ],
      },
      {
        title: 'Operating the plan',
        duration: '6h 40m',
        lessons: [
          { title: 'Metrics that change behavior', duration: '31m' },
          { title: 'Case: scaling a learning studio', duration: '44m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Owen Price',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'May 14, 2026',
        text: 'Daniel is direct. The pricing module paid for the course immediately.',
      },
    ],
  },
  {
    id: 'node-api-craft',
    title: 'Node.js API Craft',
    instructorId: 'hiro-tanaka',
    thumbnail:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=80',
    category: 'development',
    rating: 4.8,
    reviews: 1744,
    duration: '24h 50m',
    lectures: 131,
    level: 'Intermediate',
    price: 54.99,
    originalPrice: 94.99,
    isFree: false,
    students: 12890,
    language: 'English',
    lastUpdated: 'August 2026',
    popular: false,
    description:
      'Design APIs that stay calm under real traffic. You will model learning data, authenticate students, and ship endpoints that frontend teams enjoy using.',
    learningOutcomes: [
      'Model courses, enrollments, and progress cleanly',
      'Authenticate users without hiding complexity',
      'Validate input and fail with useful errors',
      'Test the paths that actually break in production',
      'Document APIs that product teams will read',
      'Deploy a service with sensible observability',
    ],
    curriculum: [
      {
        title: 'Service shape',
        duration: '5h 30m',
        lessons: [
          { title: 'Boundaries and folders that age well', duration: '27m' },
          { title: 'Data modeling for learning products', duration: '39m' },
        ],
      },
      {
        title: 'Auth and access',
        duration: '7h 15m',
        lessons: [
          { title: 'Sessions, tokens, and student roles', duration: '42m' },
          { title: 'Protecting dashboard resources', duration: '33m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Ivy Chen',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Aug 4, 2026',
        text: 'Hiro treats backend work like product design. Rare and valuable.',
      },
    ],
  },
  {
    id: 'visual-ui-systems',
    title: 'Visual UI Systems',
    instructorId: 'aisha-rahman',
    thumbnail:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80',
    category: 'design',
    rating: 4.7,
    reviews: 1211,
    duration: '14h 45m',
    lectures: 76,
    level: 'Intermediate',
    price: 29.99,
    originalPrice: 49.99,
    isFree: false,
    students: 8760,
    language: 'English',
    lastUpdated: 'May 2026',
    popular: false,
    description:
      'Move beyond pretty screens. Build a visual system for an education brand covering type, color, motion, and component rhythm.',
    learningOutcomes: [
      'Establish type scales that stay readable on phones',
      'Use color for hierarchy, not decoration',
      'Design motion that teaches instead of distracting',
      'Document tokens engineers can implement',
      'Critique interfaces with shared language',
      'Ship a mini design system for Learnify',
    ],
    curriculum: [
      {
        title: 'Brand in the interface',
        duration: '4h 20m',
        lessons: [
          { title: 'Education brands that feel trustworthy', duration: '21m' },
          { title: 'Type, space, and scanning patterns', duration: '35m' },
        ],
      },
      {
        title: 'Components in motion',
        duration: '6h 05m',
        lessons: [
          { title: 'Cards, progress, and certificates', duration: '40m' },
          { title: 'Micro-interactions that earn their keep', duration: '18m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Sara Kim',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Apr 29, 2026',
        text: 'The progress bar lesson changed how I think about feedback in products.',
      },
    ],
  },
  {
    id: 'sql-for-analysts',
    title: 'SQL for Curious Analysts',
    instructorId: 'marcus-chen',
    thumbnail:
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80',
    category: 'data-science',
    rating: 4.8,
    reviews: 2099,
    duration: '12h 10m',
    lectures: 68,
    level: 'Beginner',
    price: 0,
    originalPrice: 0,
    isFree: true,
    students: 25680,
    language: 'English',
    lastUpdated: 'July 2026',
    popular: true,
    description:
      'Write SQL that answers product questions. You will query enrollment funnels, lesson completion, and instructor performance using realistic tables.',
    learningOutcomes: [
      'Select, filter, and join learning datasets confidently',
      'Window functions for progress and ranking',
      'Catch bad metrics before they reach a slide',
      'Translate stakeholder questions into queries',
      'Build a personal query recipe book',
      'Explain results without drowning people in rows',
    ],
    curriculum: [
      {
        title: 'The shape of learning data',
        duration: '3h 50m',
        lessons: [
          { title: 'Tables you will meet at work', duration: '24m' },
          { title: 'Joins without the fear', duration: '31m' },
        ],
      },
      {
        title: 'Questions that matter',
        duration: '5h 40m',
        lessons: [
          { title: 'Completion, drop-off, and quality', duration: '37m' },
          { title: 'Capstone query set', duration: '29m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Ravi Patel',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Jul 11, 2026',
        text: 'Free SQL with actual education data. I bookmarked every exercise.',
      },
    ],
  },
  {
    id: 'content-that-converts',
    title: 'Content That Converts Learners',
    instructorId: 'elena-rossi',
    thumbnail:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80',
    category: 'marketing',
    rating: 4.5,
    reviews: 744,
    duration: '11h 25m',
    lectures: 59,
    level: 'Beginner',
    price: 24.99,
    originalPrice: 39.99,
    isFree: false,
    students: 6930,
    language: 'English',
    lastUpdated: 'April 2026',
    popular: false,
    description:
      'Write course pages, emails, and lesson intros that respect the reader. This is content for people who want students, not vanity metrics.',
    learningOutcomes: [
      'Outline a content engine around student questions',
      'Write course landing copy that is specific',
      'Turn instructor expertise into publishable drafts',
      'Build a simple editorial calendar',
      'Measure content without worshipping traffic',
      'Edit ruthlessly while keeping a human voice',
    ],
    curriculum: [
      {
        title: 'Voice and promise',
        duration: '3h 15m',
        lessons: [
          { title: 'Promises students can test', duration: '20m' },
          { title: 'Editing for trust', duration: '26m' },
        ],
      },
      {
        title: 'Formats that compound',
        duration: '5h 05m',
        lessons: [
          { title: 'Lesson intros and emails', duration: '33m' },
          { title: 'Repurposing without looking lazy', duration: '18m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Maya Brooks',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
        rating: 4,
        date: 'Mar 30, 2026',
        text: 'Tight writing drills. My course page bounce rate dropped the next week.',
      },
    ],
  },
  {
    id: 'ml-foundations',
    title: 'Machine Learning Foundations',
    instructorId: 'marcus-chen',
    thumbnail:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    category: 'data-science',
    rating: 4.9,
    reviews: 2650,
    duration: '36h 00m',
    lectures: 172,
    level: 'Intermediate',
    price: 59.99,
    originalPrice: 109.99,
    isFree: false,
    students: 17330,
    language: 'English',
    lastUpdated: 'September 2026',
    popular: true,
    description:
      'A grounded introduction to machine learning for people who want intuition and working notebooks, not buzzwords. We stay close to evaluation and failure modes.',
    learningOutcomes: [
      'Frame prediction problems without overclaiming',
      'Train and evaluate models with honest splits',
      'Explain features to a non-technical teammate',
      'Avoid leakage in learning-platform datasets',
      'Ship a small recommendation notebook',
      'Know when not to use a model',
    ],
    curriculum: [
      {
        title: 'Problem framing',
        duration: '4h 40m',
        lessons: [
          { title: 'What a model is allowed to promise', duration: '28m' },
          { title: 'Labels, leakage, and luck', duration: '36m' },
        ],
      },
      {
        title: 'Models in the notebook',
        duration: '12h 20m',
        lessons: [
          { title: 'Classic algorithms, modern evaluation', duration: '52m' },
          { title: 'Capstone: next-lesson suggestions', duration: '61m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Theo Nkrumah',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Sep 1, 2026',
        text: 'The leakage lecture should be required viewing for every junior analyst.',
      },
    ],
  },
  {
    id: 'ops-for-founders',
    title: 'Operations for Learning Teams',
    instructorId: 'daniel-okonkwo',
    thumbnail:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    category: 'business',
    rating: 4.4,
    reviews: 512,
    duration: '9h 50m',
    lectures: 48,
    level: 'All levels',
    price: 19.99,
    originalPrice: 34.99,
    isFree: false,
    students: 4210,
    language: 'English',
    lastUpdated: 'March 2026',
    popular: false,
    description:
      'Keep a small education team running. Cadences, handoffs, instructor onboarding, and the unglamorous work that makes courses ship on time.',
    learningOutcomes: [
      'Design a production calendar instructors will follow',
      'Run standups that do not waste mornings',
      'Onboard guest teachers without chaos',
      'Track quality without a bloated tool stack',
      'Handle student support with clear SLAs',
      'Retrospectives that change next week’s plan',
    ],
    curriculum: [
      {
        title: 'Cadence',
        duration: '3h 20m',
        lessons: [
          { title: 'The weekly operating rhythm', duration: '24m' },
          { title: 'Quality bars for lessons', duration: '19m' },
        ],
      },
      {
        title: 'People and support',
        duration: '4h 10m',
        lessons: [
          { title: 'Instructor onboarding kit', duration: '27m' },
          { title: 'Student support without burnout', duration: '22m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Lina Berg',
        avatar:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
        rating: 4,
        date: 'Feb 18, 2026',
        text: 'Short, opinionated, and immediately useful for our cohort program.',
      },
    ],
  },
  {
    id: 'fullstack-javascript',
    title: 'Full-Stack JavaScript Path',
    instructorId: 'hiro-tanaka',
    thumbnail:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    category: 'development',
    rating: 4.7,
    reviews: 1888,
    duration: '41h 30m',
    lectures: 210,
    level: 'Beginner',
    price: 64.99,
    originalPrice: 119.99,
    isFree: false,
    students: 20140,
    language: 'English',
    lastUpdated: 'September 2026',
    popular: true,
    description:
      'Go from first JavaScript function to a deployed learning app. Frontend, API, auth, and a student dashboard — taught as one coherent product.',
    learningOutcomes: [
      'Write modern JavaScript with confidence',
      'Build React screens that talk to your own API',
      'Store enrollments and progress',
      'Add login, registration, and protected routes',
      'Deploy a complete app students can use',
      'Debug across the stack without guessing',
    ],
    curriculum: [
      {
        title: 'Language and the browser',
        duration: '8h 40m',
        lessons: [
          { title: 'Functions, modules, and async flow', duration: '44m' },
          { title: 'DOM and state without frameworks', duration: '31m' },
        ],
      },
      {
        title: 'The learning app',
        duration: '18h 20m',
        lessons: [
          { title: 'React classroom UI', duration: '56m' },
          { title: 'API, auth, and progress bars', duration: '49m' },
        ],
      },
    ],
    reviewsList: [
      {
        name: 'Alex Rivera',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        date: 'Sep 9, 2026',
        text: 'The only beginner path I have seen that treats the dashboard as a real product.',
      },
    ],
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Amelia Grant',
    role: 'Career switcher, Dublin',
    quote:
      'I went from scattered YouTube tabs to a weekly rhythm. The dashboard made it obvious what to finish next.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    course: 'Complete React.js Mastery',
  },
  {
    id: 2,
    name: 'Kwame Boateng',
    role: 'Analyst, Accra',
    quote:
      'Marcus teaches data like a craft. I stopped copying notebooks and started defending my charts in meetings.',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    course: 'Python for Data Analysis Lab',
  },
  {
    id: 3,
    name: 'Hana Suzuki',
    role: 'Junior designer, Osaka',
    quote:
      'The Figma studio felt like a real critique circle. I shipped a case study that actually got interview callbacks.',
    avatar:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
    course: 'Figma Product Design Studio',
  },
  {
    id: 4,
    name: 'Noah Feldman',
    role: 'Founder, Austin',
    quote:
      'We used Learnify to upskill a five-person team. Progress bars and certificates made accountability easy without being corporate.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    course: 'Business Strategy for Builders',
  },
]

export const platformStats = [
  { label: 'Students', value: '120k+' },
  { label: 'Courses', value: '480+' },
  { label: 'Instructors', value: '160+' },
  { label: 'Completion rate', value: '94%' },
]

export const getInstructor = (id) => instructors.find((item) => item.id === id)

export const getCourse = (id) => courses.find((item) => item.id === id)

export const getCoursesByInstructor = (instructorId) =>
  courses.filter((course) => course.instructorId === instructorId)
