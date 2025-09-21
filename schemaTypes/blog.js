export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 },
      },
      { name: 'author', title: 'Author', type: 'reference', to: [{ type: 'user' }] },
      { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
      { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
      { name: 'publishedAt', title: 'Published At', type: 'datetime' },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
    ],
  }
  
  