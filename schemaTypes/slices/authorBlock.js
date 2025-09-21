export default {
    name: 'authorBlock',
    title: 'Author Block',
    type: 'object',
    fields: [
      { name: 'author', title: 'Author (reference)', type: 'reference', to: [{ type: 'user' }] },
      { name: 'showBio', title: 'Show bio', type: 'boolean', initialValue: true }
    ],
    preview: { select: { title: 'author.name', subtitle: 'author.email', media: 'author.avatar' } }
  }
  