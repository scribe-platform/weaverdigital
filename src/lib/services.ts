// Every service Weaver Digital offers, grouped. Used by the home page overview
// and the services page. No prices here on purpose: pricing isn't public yet.

// Simple line icons (inline SVG inner markup, 24x24, stroke-based)
export const icons: Record<string, string> = {
  site: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',
  pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/>',
  map: '<path d="m9 4-6 3v13l6-3 6 3 6-3V4l-6 3z"/><path d="M9 4v13M15 7v13"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  heart: '<path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
  pen: '<path d="M12 19l7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
  flyer: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  doc: '<path d="M6 3h12v18H6z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  call: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
};

export interface Service { icon: string; title: string; line: string }
export interface Group { id: string; short: string; icon: string; title: string; thin: string; line: string; items: Service[] }

export const groups: Group[] = [
  {
    id: 'websites', short: 'Websites', icon: 'site', title: 'Your ', thin: 'website', line: 'A clean site that works on every phone.',
    items: [
      { icon: 'site', title: 'Website design', line: 'A simple 3–5 page site, built for your business.' },
      { icon: 'edit', title: 'Edit it yourself', line: 'Change your hours, photos and services anytime.' },
      { icon: 'globe', title: 'Your domain', line: 'Registered in your name from day one.' },
      { icon: 'lock', title: 'Hosting & security', line: 'Backups, SSL and uptime monitoring, handled.' },
      { icon: 'pen', title: 'Monthly updates', line: 'Need something bigger changed? I do it for you.' },
    ],
  },
  {
    id: 'google', short: 'Google & local', icon: 'pin', title: 'Google & ', thin: 'local search', line: 'Show up when people nearby search.',
    items: [
      { icon: 'pin', title: 'Google Business Profile', line: 'Claimed, verified, filled out and kept active.' },
      { icon: 'search', title: 'Local SEO', line: 'So you rank for the searches that matter.' },
      { icon: 'list', title: 'Directory listings', line: 'Your name, address and phone right everywhere.' },
      { icon: 'map', title: 'More towns', line: 'Show up in the next town over, too.' },
    ],
  },
  {
    id: 'reviews', short: 'Reviews', icon: 'star', title: 'Reviews & ', thin: 'reputation', line: 'More reviews. Better first impressions.',
    items: [
      { icon: 'phone', title: 'Review link', line: 'Text it to happy customers after every job.' },
      { icon: 'star', title: 'Review monitoring', line: 'I watch for new reviews so nothing slips by.' },
      { icon: 'chat', title: 'Response drafts', line: 'Thoughtful replies written for you, good or bad.' },
    ],
  },
  {
    id: 'social', short: 'Social media', icon: 'heart', title: 'Social ', thin: 'media', line: 'Stay in front of your customers.',
    items: [
      { icon: 'heart', title: 'Social management', line: 'Regular posts on the platforms your customers use.' },
      { icon: 'users', title: 'Community', line: 'Comments and messages answered.' },
      { icon: 'video', title: 'Short-form video', line: 'Reels, TikToks and Shorts.' },
    ],
  },
  {
    id: 'design', short: 'Design & content', icon: 'flyer', title: 'Design & ', thin: 'content', line: 'Graphics and content that look like you.',
    items: [
      { icon: 'flyer', title: 'Graphics & flyers', line: 'For sales, new services or the holidays.' },
      { icon: 'calendar', title: 'Seasonal campaigns', line: 'A full set of graphics for an event or season.' },
      { icon: 'mail', title: 'Email newsletter', line: 'Keep past customers coming back.' },
      { icon: 'doc', title: 'Blog posts', line: 'Helpful articles that bring in searches.' },
      { icon: 'camera', title: 'Photo sessions', line: 'Real photos of your work and your team.' },
    ],
  },
  {
    id: 'reports', short: 'Reports', icon: 'chart', title: 'Reports & ', thin: 'strategy', line: 'See exactly what is working.',
    items: [
      { icon: 'chart', title: 'Monthly report', line: 'One page: calls, directions, visits, reviews.' },
      { icon: 'call', title: 'Strategy check-ins', line: 'A regular call about what to do next.' },
    ],
  },
];
