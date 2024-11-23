import { getPermalink, getBlogPermalink, getProjPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '主页',
      href: getPermalink('/'),
      links: [
        // {
        //   text: 'SaaS',
        //   href: getPermalink('/homes/saas'),
        // },
        // {
        //   text: 'Startup',
        //   href: getPermalink('/homes/startup'),
        // },
        // {
        //   text: 'Mobile App',
        //   href: getPermalink('/homes/mobile-app'),
        // },
        // {
        //   text: 'Personal',
        //   href: getPermalink('/homes/personal'),
        // },
      ],
    },
    {
      text: '解决方案',
      href: getPermalink('/solutions'),
      links: [
        {
          text: '产业园区',
          href: getPermalink('/solutions/industries'),
        },
        {
          text: '实验室和认证机构',
          href: getPermalink('/solutions/labs'),
        },
        {
          text: '全球贸易',
          href: getPermalink('/solutions/gl-bussiness'),
        },
        {
          text: '航运与物流',
          href: getPermalink('/solutions/transport'),
        },
      ],
    },
    {
      text: '核心产品',
      href: getPermalink('/products'),
      links: [
        {
          text: '天苏云',
          href: getPermalink('/products/ts-cloud'),
        },
        {
          text: '绿境通',
          href: getPermalink('/products/green-pass'),
        },
        {
          text: 'AI 报告工具',
          href: getPermalink('/products/ai-tools'),
        },
      ],
    },
    // {
    //   text: 'Team',
    //   href: '',
    // },
    // {
    //   text: 'Pricing',
    //   href: getPermalink('/pricing'),
    // },
    // {
    //   text: '',
    //   links: [
    //     // {
    //     //   text: 'Features (Anchor Link)',
    //     //   href: getPermalink('/#features'),
    //     // },
    //     // {
    //     //   text: 'Services',
    //     //   href: getPermalink('/services'),
    //     // },

    //     // {
    //     //   text: 'Contact',
    //     //   href: getPermalink('/contact'),
    //     // },
    //     // {
    //     //   text: 'Terms',
    //     //   href: getPermalink('/terms'),
    //     // },
    //     // {
    //     //   text: 'Privacy policy',
    //     //   href: getPermalink('/privacy'),
    //     // },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: '天苏面板',
      href: getBlogPermalink(),
      links: [
        // {
        //   text: '',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: '',
        //   href: getProjPermalink(),
        // },
        // {
        //   text: 'Article',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Article (with MDX)',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        {
          text: '天苏十条',
          href: getPermalink('tian1-su1-shi2-tiao2','category'),
        },
        {
          text: '天苏辑录',
          href: getPermalink('tian1-su1-ji2-lu4','category'),
        },
        {
          text: '天苏纵论',
          href: getPermalink('/homes/talk'),
        },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    {
      text: '联系我们',
      links: [
        // {
        //   text: '淘宝',
        //   href: getPermalink('/landing/lead-generation'),
        // },
        {
          text: '淘宝',
          href: getPermalink('/sales'),
        },
        {
          text: '关于我们',
          href: getPermalink('/about'),
        },
        // {
        //   text: 'Click-Through',
        //   href: getPermalink('/landing/click-through'),
        // },
        // {
        //   text: 'Product Details (or Services)',
        //   href: getPermalink('/landing/product'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [{ text: '立即咨询', href: 'https://github.com/TS-energy', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        // { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        // { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        // { text: 'Atom', href: '#' },
        // { text: 'Electron', href: '#' },
        // { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/TS-energy' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/TS-energy"> TSu-Energy</a> · All rights reserved.
  `,
};
