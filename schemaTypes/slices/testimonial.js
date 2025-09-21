export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
      { name: 'quote', title: 'Quote', type: 'text' },
      { name: 'authorName', title: 'Author name', type: 'string' },
      { name: 'authorRole', title: 'Role', type: 'string' },
      { name: 'authorAvatar', title: 'Avatar', type: 'image' }
    ],
    preview: { select: { title: 'authorName', subtitle: 'quote', media: 'authorAvatar' } }
  }
  