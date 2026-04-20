export default {
  name: 'clenTymu',
  title: 'Člen týmu',
  type: 'document',
  fields: [
    {
      name: 'jmeno',
      title: 'Jméno a příjmení',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role ve spolku',
      type: 'string',
      description: 'Např. "Předseda", "Projektová koordinátorka", "Group leader"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fotka',
      title: 'Fotka',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'bio',
      title: 'Krátký popis / bio',
      type: 'text',
      rows: 3,
      description: 'Pár vět o osobě (volitelné)',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Odkaz na IG profil (volitelné)',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      description: 'Odkaz na LinkedIn profil (volitelné)',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Volitelné - veřejný kontaktní email',
    },
    {
      name: 'telefon',
      title: 'Telefon',
      type: 'string',
      description: 'Volitelné - veřejný kontaktní telefon',
    },
    {
      name: 'poradi',
      title: 'Pořadí zobrazení',
      type: 'number',
      description: 'Menší číslo = zobrazí se dřív',
      initialValue: 100,
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