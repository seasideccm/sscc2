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
  '/guidelines/Cadiovascular/': [
     {
   	  isGroup: true,
      text: '心血管',
      children: [
        '/guidelines/Cadiovascular/README.md',
        '/guidelines/Cadiovascular/2020 AHA  Pediatric Basic and Advanced Life Support.md',
        '/guidelines/Cadiovascular/常规心电图检查操作指南 简版.md',
        '/guidelines/Cadiovascular/急性心肌梗死伴心源性休克的有创治疗.md',
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
        '/bloodflow/Microstructure and cerebral blood flow changes in patients recovered from COVID-19.md',
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
