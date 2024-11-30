import { getPermalink, getBlogPermalink, getProjPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '主页',
      href: getPermalink('/'),
      links: [
      ],
    },
    {
      text: '解决方案',
      // href: getPermalink('/solutions'),
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
          href: getPermalink('/solutions/trade'),
        },
        // {
        //   text: '航运与物流',
        //   href: getPermalink('/solutions/transport'),
        // },
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
    {
      text: '天苏面板',
      href: getBlogPermalink(),
      links: [
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
      ],
    },
    {
      text: '联系我们',
      links: [
        {
          text: '淘宝',
          href: getPermalink('/sales'),
        },
        {
          text: '关于我们',
          href: getPermalink('/about'),
        },
      ],
    },
  ],
  actions: [{ text: '立即咨询', href: 'https://github.com/TS-energy', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Partners', href: '#' },
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
