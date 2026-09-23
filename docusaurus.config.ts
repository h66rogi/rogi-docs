import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rogi API 문서',
  tagline: '후로기 방송 데이터 API',
  favicon: 'img/favicon.svg',
  url: 'https://docs.rogi.chat',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'ko', locales: ['ko']},
  presets: [
    ['classic', {
      docs: {
        routeBasePath: '/',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/h66rogi/rogi-docs/edit/main/',
      },
      blog: false,
      theme: {customCss: './src/css/custom.css'},
    } satisfies Preset.Options],
  ],
  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'Rogi API',
      items: [
        {type: 'docSidebar', sidebarId: 'apiSidebar', position: 'left', label: '문서'},
        {href: 'https://github.com/h66rogi/rogi-collector', label: '소스', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{title: '프로젝트', items: [
        {label: '수집기', href: 'https://github.com/h66rogi/rogi-collector'},
        {label: '문서 저장소', href: 'https://github.com/h66rogi/rogi-docs'},
      ]}],
      copyright: `© ${new Date().getFullYear()} h66rogi`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
