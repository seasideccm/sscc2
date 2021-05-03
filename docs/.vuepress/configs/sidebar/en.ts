import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/en/guidelines/': [
    {
      isGroup: true,
      text: 'guidelines',
      children: [
        '/en/guidelines/README.md',
        '/en/guidelines/急性心肌梗死伴心源性休克的有创治疗.md',
      ],
    },
  ],
  '/en/bloodflow/': [
    {
      isGroup: true,
      text: 'BloodFlow',
      children: [
        '/en/bloodflow/readme.md',
		'/en/bloodflow/blood flow.md',
        '/en/bloodflow/Regional perfusion monitoring in shock.md',
      ],
    },
	],
   '/en/test/': [
   {
      isGroup: true,
      text: 'Test',
      children: [
        '/en/test/README.md',
        '/en/test/CodeGroup.md',
        '/en/test/Container.md',		
      ],
    },
  ],
}
