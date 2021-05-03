import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/guidelines/': [
    {
      isGroup: true,
      text: '指南',
      children: [
        '/guidelines/README.md',
        '/guidelines/急性心肌梗死伴心源性休克的有创治疗.md',
      ],
    },
  ],
  '/bloodflow/': [
    {
      isGroup: true,
      text: '血流',
      children: [
        '/bloodflow/readme.md',
		'/bloodflow/blood flow.md',
        '/bloodflow/Regional perfusion monitoring in shock.md',
      ],
    },
	],
   '/test/': [
   {
      isGroup: true,
      text: '测试',
      children: [
        '/test/README.md',
        '/test/CodeGroup.md',
      ],
    },
  ],
}
