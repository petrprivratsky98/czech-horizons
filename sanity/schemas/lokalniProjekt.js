export default {
  name: 'lokalniProjekt',
  title: 'Lokální projekt',
  type: 'document',
  fields: [
    {
      name: 'nazev',
      title: 'Název projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Např. #PrahaBezOdpadků',
    },
    {
      name: 'slug',
      title: 'URL adresa projektu',
      type: 'slug',
      options: {
        source: 'nazev',
        maxLength: 96,
      },
      description: 'Automaticky vygeneruje adresu — klikni Generate',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'podnadpis',
      title: 'Krátký podnadpis',
      type: 'string',
      description: 'Jedna věta o projektu',
    },
    {
      name: 'hlavniFotka',
      title: 'Hlavní fotka',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'popis',
      title: 'Dlouhý popis projektu',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      description: 'Hlavní text projektu — podporuje nadpisy, odstavce, obrázky',
    },
    {
      name: 'akce',
      title: 'Akce v rámci projektu',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'akce'}],
        },
      ],
      description: 'Přidej jednotlivé akce, ze kterých se projekt skládá',
    },
    {
      name: 'statPocetAkci',
      title: 'Statistika — počet akcí',
      type: 'string',
      description: 'Např. "05" — zobrazí se na kartě projektu',
    },
    {
      name: 'statPocetUcastniku',
      title: 'Statistika — počet účastníků',
      type: 'string',
      description: 'Např. "120+"',
    },
    {
      name: 'status',
      title: 'Status projektu',
      type: 'string',
      options: {
        list: [
          {title: 'Probíhající', value: 'probihajici'},
          {title: 'Ukončený', value: 'ukonceny'},
          {title: 'Připravovaný', value: 'pripravovany'},
        ],
      },
      initialValue: 'probihajici',
    },
  ],
  preview: {
    select: {
      title: 'nazev',
      subtitle: 'podnadpis',
      media: 'hlavniFotka',
    },
  },
}
