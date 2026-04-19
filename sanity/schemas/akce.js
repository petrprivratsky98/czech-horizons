export default {
  name: 'akce',
  title: 'Akce / Event',
  type: 'document',
  fields: [
    {
      name: 'nazev',
      title: 'Název akce',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'kategorie',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Úklidová akce', value: 'uklid'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Setkání komunity', value: 'setkani'},
          {title: 'Infosession', value: 'infosession'},
          {title: 'Výlet', value: 'vylet'},
          {title: 'Jiné', value: 'jine'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'datum',
      title: 'Datum a čas',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'casDo',
      title: 'Čas ukončení (volitelné)',
      type: 'string',
      description: 'Např. "14:00" nebo "open end"',
    },
    {
      name: 'misto',
      title: 'Místo',
      type: 'string',
      description: 'Např. "Praha 7, Stromovka"',
    },
    {
      name: 'adresa',
      title: 'Adresa (podrobná)',
      type: 'string',
      description: 'Např. "Sraz u hlavní brány"',
    },
    {
      name: 'kapacita',
      title: 'Kapacita',
      type: 'string',
      description: 'Např. "30 míst" nebo "volná"',
    },
    {
      name: 'popis',
      title: 'Popis akce',
      type: 'text',
      rows: 4,
    },
    {
      name: 'fotka',
      title: 'Fotka',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'odkazFB',
      title: 'Odkaz na Facebook event',
      type: 'url',
    },
    {
      name: 'odkazIG',
      title: 'Odkaz na Instagram příspěvek',
      type: 'url',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Nadcházející', value: 'nadchazejici'},
          {title: 'Probíhá', value: 'probihajici'},
          {title: 'Proběhlo', value: 'proběhlo'},
          {title: 'Zrušeno', value: 'zruseno'},
        ],
      },
      initialValue: 'nadchazejici',
    },
  ],
  preview: {
    select: {
      title: 'nazev',
      subtitle: 'datum',
      media: 'fotka',
    },
    prepare({title, subtitle, media}) {
      const datum = subtitle ? new Date(subtitle).toLocaleDateString('cs-CZ') : 'bez data'
      return {
        title,
        subtitle: datum,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Nejbližší data nahoře',
      name: 'datumAsc',
      by: [{field: 'datum', direction: 'asc'}],
    },
    {
      title: 'Nejnovější nahoře',
      name: 'datumDesc',
      by: [{field: 'datum', direction: 'desc'}],
    },
  ],
}