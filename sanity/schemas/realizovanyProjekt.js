export default {
  name: 'realizovanyProjekt',
  title: 'Realizovaný projekt',
  type: 'document',
  fields: [
    {
      name: 'nazev',
      title: 'Název projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'typ',
      title: 'Typ projektu',
      type: 'string',
      options: {
        list: [
          {title: 'Výměna mládeže', value: 'vymena'},
          {title: 'Tréninkový kurz', value: 'trening'},
        ],
      },
    },
    {
      name: 'zeme',
      title: 'Země',
      type: 'string',
    },
    {
      name: 'mesto',
      title: 'Město',
      type: 'string',
    },
    {
      name: 'vlajka',
      title: 'Vlajka (emoji)',
      type: 'string',
    },
    {
      name: 'datum',
      title: 'Datum (text)',
      type: 'string',
      description: 'Např. "3.–13. března 2026"',
    },
    {
      name: 'pocetUcastniku',
      title: 'Počet účastníků',
      type: 'number',
    },
    {
      name: 'popis',
      title: 'Popis / Report',
      type: 'text',
      rows: 6,
    },
    {
      name: 'fotoalbum',
      title: 'Fotoalbum',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'popisek',
              title: 'Popisek fotky',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'feedbacky',
      title: 'Feedback účastníků',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text feedbacku',
              type: 'text',
              rows: 3,
            },
            {
              name: 'jmeno',
              title: 'Jméno účastníka',
              type: 'string',
            },
            {
              name: 'vek',
              title: 'Věk',
              type: 'number',
            },
          ],
          preview: {
            select: {
              title: 'jmeno',
              subtitle: 'text',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'nazev',
      subtitle: 'mesto',
      media: 'fotoalbum.0',
    },
  },
}