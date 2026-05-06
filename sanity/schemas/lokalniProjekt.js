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
      name: 'nazev_en',
      title: 'Název projektu (EN)',
      type: 'string',
      description: 'English project name — leave empty to use Czech',
    },
    {
      name: 'podnadpis_en',
      title: 'Krátký podnadpis (EN)',
      type: 'string',
      description: 'English subtitle — leave empty to use Czech',
    },
    {
      name: 'obdobiOd',
      title: 'Období — od',
      type: 'string',
      description: 'Např. "březen 2026" nebo "jaro 2026"',
    },
    {
      name: 'obdobiDo',
      title: 'Období — do',
      type: 'string',
      description: 'Např. "listopad 2026" (volitelné — pokud projekt stále pokračuje, nech prázdné)',
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
      name: 'popis_en',
      title: 'Dlouhý popis projektu (EN)',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      description: 'English long description — leave empty to use Czech',
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
    {
      name: 'galerie',
      title: 'Fotogalerie',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'popisek',
              title: 'Popisek fotky (volitelné)',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
      description: 'Nahraj fotky z projektu — zobrazí se na detail stránce jako galerie',
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
