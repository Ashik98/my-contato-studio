export default {
    name: 'blogList',
    title: 'Blog List (Latest / Selected)',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'posts',
        title: 'Posts',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'blog' }] }]
      },
      { name: 'showCount', title: 'Max items to show', type: 'number', initialValue: 3 }
    ],
    preview: { select: { title: 'title', subtitle: 'posts.0.title' } }
  }
  