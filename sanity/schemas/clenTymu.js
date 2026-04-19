export default {
  name: 'clenTymu',
  title: 'Člen týmu',
  type: 'document',
  fields: [
    {
      name: 'jmeno',
      title: 'Jméno',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role v týmu',
      type: 'string',
      description: 'Např. Předseda, Projekty, Komunikace',
    },
    {
      name: 'fotka',
      title: 'Fotka',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'bio',
      title: 'Krátké bio',
      type: 'text',
      rows: 4,
    },
    {
      name: 'instagram',
      title: 'Instagram handle',
      type: 'string',
      description: 'Bez @ — např. "petr.prague"',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'poradi',
      title: 'Pořadí v týmu',
      type: 'number',
      description: '1, 2, 3... určuje pořadí zobrazení',
    },
  ],
  orderings: [
    {
      title: 'Podle pořadí',
      name: 'poradiAsc',
      by: [{field: 'poradi', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'jmeno',
      subtitle: 'role',
      media: 'fotka',
    },
  },
}