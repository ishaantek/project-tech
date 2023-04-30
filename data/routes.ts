const routes = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/workshops',
    name: 'Workshops',
  },
  {
    href: '/clubs',
    name: 'Clubs',
    dropRoutes: [
      {
        href: '/students',
        name: 'For Students',
      },
      {
        href: '/teachers',
        name: 'For Teachers',
      },
      {
        href: '/register',
        name: 'Register',
      },
    ],
  },
  {
    href: '/blog',
    name: 'Blog',
  },
  {
    href: '/people/team',
    name: 'Our Team',
  },
]

export default routes
