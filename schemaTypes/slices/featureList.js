export default {
    name: 'featureList',
    title: 'Feature List',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'feature',
            title: 'Feature',
            fields: [
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
              { name: 'icon', title: 'Icon (image)', type: 'image', options: { hotspot: true } }
            ]
          }
        ]
      }
    ],
    preview: { select: { title: 'title' } }
  }
  