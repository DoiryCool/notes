// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jerry Gu\'s Site',
  tagline: '顾俊玮的主页',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://notes.doiry.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DoiryCool', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'papers',
        path: 'docs/papers',
        routeBasePath: 'papers',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'diaries',
        path: 'docs/diaries',
        routeBasePath: 'diaries',
        sidebarPath: './sidebars.js',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: 'docs/projects',
        routeBasePath: 'projects',
        sidebarPath: './sidebars.js',
      },
    ],
  ],
  presets: [
    
    [
      
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-6QSZNZ2N1G',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.js',
          path: 'docs/notes',
          routeBasePath: 'notes',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/DoiryCool/notes/tree/main',
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DoiryCool/notes/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
      
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '主页',
        logo: {
          alt: 'My Site Logo',
          src: 'img/snowfox.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'noteSidebar',
            position: 'left',
            docId: 'README',
            label: '笔记',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            docsPluginId: 'projects',
            type: 'doc',
            docId: 'README',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: '项目',
          },
          {
            docsPluginId: 'papers',
            type: 'doc',
            docId: 'README',
            sidebarId: 'paperSidebar',
            position: 'left',
            label: '论文',
          },
          // {
          //   docsPluginId: 'diaries',
          //   type: 'doc',
          //   docId: 'README',
          //   sidebarId: 'diarySidebar',
          //   position: 'left',
          //   label: '日记',
          // },
          {
            href: 'https://github.com/DoiryCool/notes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Frameworks',
            items: [
              {
                label: 'React.js',
                href: 'https://react.dev/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'VistaLab | 远景实验室',
                href: 'https://www.vistalab.top/',
              },
              {
                label: '电子组培训文档',
                href: 'https://book.jinhun.moe/Intro.html',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DoiryCool',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Notes, Jerry Gu. Built with Docusaurus. <br\> 顾俊玮 <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2022012206号-3</a>`,
        
      },
      prism: {
        theme: prismThemes.dracula,
        
      },
      
    }),
};

module.exports = config;
