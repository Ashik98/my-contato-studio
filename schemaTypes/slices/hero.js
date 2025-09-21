export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
      { name: 'pretitle', title: 'Pretitle (small)', type: 'string' },
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'text' },
      { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
      { name: 'ctaUrl', title: 'CTA URL', type: 'url' },
      { name: 'align', title: 'Alignment', type: 'string', options: { list: ['left','center','right'], layout: 'dropdown' } }
    ],
    preview: {
      select: { title: 'title', media: 'backgroundImage' }
    }
  }
  