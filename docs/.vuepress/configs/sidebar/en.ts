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
    '/en/guidelines/Cadiovascular/': [
     {
      isGroup: true,
      text: '心血管',
      children: [
        '/en/guidelines/Cadiovascular/README.md',
        '/en/guidelines/Cadiovascular/2020 AHA  Pediatric Basic and Advanced Life Support.md',
        '/en/guidelines/Cadiovascular/常规心电图检查操作指南(简版).md',
        '/en/guidelines/Cadiovascular/急性心肌梗死伴心源性休克的有创治疗.md',
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
		'/en/bloodflow/Microstructure and cerebral blood flow changes in patients recovered from COVID-19.md',
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
