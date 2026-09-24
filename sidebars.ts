import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  portalSidebar: [
    'home',
    {type: 'category', label: 'Data API', link: {type: 'doc', id: 'intro'},
      items: ['status', 'chat-stream', 'history', 'errors']},
    {type: 'category', label: '로기마블', link: {type: 'doc', id: 'marble/overview'},
      items: ['marble/quickstart', 'marble/game-rules']},
    {type: 'category', label: 'rogi-collector', link: {type: 'doc', id: 'collector/overview'},
      items: ['collector/pipeline', 'collector/reliability']},
  ],
};

export default sidebars;
