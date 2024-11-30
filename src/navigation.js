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
        {
          text: '电池与建模',
          href: getPermalink('/solutions/batteries'),
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
          href: getPermalink('/products/ts-pass'),
        },
        {
          text: 'AI 报告工具',
          href: getPermalink('/products/ai-tool'),
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
  actions: [{ text: '立即咨询', href: '/about', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '解决方案和产品',
      links: [
        { text: '数字化绿色园区解决方案', href: '/solutions/industries' },
        { text: '实验室与认证 AI 解决方案', href: '/solutions/labs' },
        { text: '跨境贸易绿色解决方案', href: '/solutions/trade' },
        { text: '电池与建模', href: '/solutions/batteries' },
        { text: '绿境通 TSu-Pass™', href: '/products/ts-pass' },
        { text: '天苏云 TSu-Cloud', href: '/products/ts-cloud' },
        { text: 'AI 报告工具', href: '/products/ai-tool' },
      ],
    },
    {
      title: '关于天苏能源',
      links: [
        { text: '关于我们', href: '/about' },
        { text: '天苏十条', href: '/category/tian1-su1-shi2-tiao2' },
        { text: '天苏纵论', href: '/talk' },
        { text: '天苏辑录', href: '/category/tian1-su1-ji2-lu4' },
        { text: '天苏商城', href: '/sales' },
      ],
    },
    {
      title: '立即咨询',
      links: [
        { text: '电子邮件： tsuenergy@outlook.com'},
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/TS-energy' },
  ],
  footNote: `
    版权所有 <a class="text-blue-600 underline dark:text-muted" href="https://github.com/TS-energy"> TSu-Energy 天苏能源</a> · All rights reserved.
  `,
};
