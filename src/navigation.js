import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { translations } from './utils/lang';

const createNavData = (lang) => {
  console.log("in createNavData:",lang);
  return {
    links: [
      {
        text: translations.header.home[lang],
        href: getPermalink('/', lang),
      },
      {
        text: translations.header.solutions[lang],
        links: [
          {
            text: translations.header.industries[lang],
            href: getPermalink('/solutions/industries', lang),
          },
          {
            text: translations.header.labs[lang],
            href: getPermalink('/solutions/labs', lang),
          },
          {
            text: translations.header.trade[lang],
            href: getPermalink('/solutions/trade', lang),
          },
          {
            text: translations.header.batteries[lang],
            href: getPermalink('/solutions/batteries', lang),
          },
        ],
      },
      {
        text: translations.header.products[lang],
        href: getPermalink('/products', lang),
        links: [
          {
            text: translations.header.tsCloud[lang],
            href: getPermalink('/products/ts-cloud', lang),
          },
          {
            text: translations.header.tsPass[lang],
            href: getPermalink('/products/ts-pass', lang),
          },
          {
            text: translations.header.aiTool[lang],
            href: getPermalink('/products/ai-tool', lang),
          },
        ],
      },
      {
        text: translations.header.blog[lang],
        href: getBlogPermalink(lang),
        links: [
          {
            text: translations.header.tianSuTen[lang],
            href: getPermalink('/category/tian1-su1-shi2-tiao2', lang),
          },
          {
            text: translations.header.tianSuJilu[lang],
            href: getPermalink('/category/tian1-su1-ji2-lu4', lang),
          },
          {
            text: translations.header.tianSuTalk[lang],
            href: getPermalink('/homes/talk', lang),
          },
        ],
      },
      {
        text: translations.header.contactUs[lang],
        links: [
          {
            text: translations.header.sales[lang],
            href: getPermalink('/sales', lang),
          },
          {
            text: translations.header.aboutUs[lang],
            href: getPermalink('/about', lang),
          },
        ],
      },
    ],
    actions: [{ text: translations.header.consultNow[lang], href: '/about', target: '_blank' }],
  }
};

export const footerData = (lang = 'en') => ({
  links: [
    {
      title: translations.footer.solutionsTitle[lang],
      links: [
        { text: translations.footer.industrySolutions[lang], href: '/solutions/industries' },
        { text: translations.footer.labSolutions[lang], href: '/solutions/labs' },
        { text: translations.footer.tradeSolutions[lang], href: '/solutions/trade' },
        { text: translations.footer.batteriesModeling[lang], href: '/solutions/batteries' },
        { text: translations.footer.tsPass[lang], href: '/products/ts-pass' },
        { text: translations.footer.tsCloud[lang], href: '/products/ts-cloud' },
        { text: translations.footer.aiTool[lang], href: '/products/ai-tool' },
      ],
    },
    {
      title: translations.footer.aboutTitle[lang],
      links: [
        { text: translations.footer.aboutUs[lang], href: '/about' },
        { text: translations.footer.tianSuTen[lang], href: '/category/tian1-su1-shi2-tiao2' },
        { text: translations.footer.tianSuTalk[lang], href: '/talk' },
        { text: translations.footer.tianSuJilu[lang], href: '/category/tian1-su1-ji2-lu4' },
        { text: translations.footer.tsMall[lang], href: '/sales' },
      ],
    },
    {
      title: translations.footer.consultNow[lang],
      links: [{ text: translations.footer.email[lang] }],
    },
  ],
  secondaryLinks: [
    { text: translations.footer.terms[lang], href: getPermalink('/terms',lang) },
    { text: translations.footer.privacyPolicy[lang], href: getPermalink('/privacy',lang) },
  ],
  socialLinks: [
    { ariaLabel: translations.footer.github[lang], icon: 'tabler:brand-github', href: 'https://github.com/TS-energy' },
  ],
  footNote: translations.footer.footerNote[lang],
});

export const getLocalizedNavigation = (lang) => {
  console.log("getLocalizedNavigation lang:", lang); // Debugging log
  return {
    header: createNavData(lang),
    footer: footerData(lang),
  };
};
