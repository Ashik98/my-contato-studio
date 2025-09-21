export default {
    name: 'textBlock',
    title: 'Rich Text Block',
    type: 'object',
    fields: [
      { name: 'title', title: 'Section title', type: 'string' },
      {
        name: 'body',
        title: 'Body (Portable Text)',
        type: 'array',
        of: [{ type: 'block' }]
      }
    ],
    preview: {
      select: { title: 'title' }
    }
  }
  