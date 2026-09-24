import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '후로기 Developers',
  tagline: '후로기 제품과 방송 데이터의 개발자 문서',
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
      title: '후로기 Developers',
      items: [
        {to: '/', label: '문서 홈', position: 'left'},
        {to: '/data-api/', label: 'Data API', position: 'left'},
        {to: '/marble/', label: '로기마블', position: 'left'},
        {to: '/collector/', label: '수집기', position: 'left'},
        {href: 'https://github.com/h66rogi', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{title: '프로젝트', items: [
        {label: '로기마블', href: 'https://github.com/h66rogi/rogimarble'},
        {label: '수집기', href: 'https://github.com/h66rogi/rogi-collector'},
        {label: '문서 저장소', href: 'https://github.com/h66rogi/rogi-docs'},
      ]}],
      copyright: `© ${new Date().getFullYear()} h66rogi`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
