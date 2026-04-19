export default {
  name: 'aktualniProjekt',
  title: 'Aktuální projekt',
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
      validation: (Rule) => Rule.required(),
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
      description: 'Např. 🇵🇹 🇮🇹 🇫🇮',
    },
    {
      name: 'datum',
      title: 'Datum (text)',
      type: 'string',
      description: 'Např. "14.–24. září 2026"',
    },
    {
      name: 'delka',
      title: 'Délka',
      type: 'string',
      description: 'Např. "10 dní"',
    },
    {
      name: 'pocetUcastniku',
      title: 'Počet účastníků',
      type: 'number',
    },
    {
      name: 'groupLeaderi',
      title: 'Počet group leaderů',
      type: 'number',
      description: 'Volitelné — +1 nebo +2 group leadeři',
    },
    {
      name: 'popis',
      title: 'Popis',
      type: 'text',
      rows: 4,
    },
    {
      name: 'fotka',
      title: 'Hlavní fotka',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'odkazPrihlaska',
      title: 'Odkaz na přihlášku',
      type: 'url',
    },
    {
      name: 'odkazInfopack',
      title: 'Odkaz na infopack',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'nazev',
      subtitle: 'mesto',
      media: 'fotka',
    },
  },
}