export default {
    name: 'ctaBanner',
    title: 'CTA Banner',
    type: 'object',
    fields: [
      { name: 'text', title: 'Text', type: 'string' },
      { name: 'subText', title: 'Sub text', type: 'string' },
      { name: 'buttonText', title: 'Button text', type: 'string' },
      { name: 'buttonUrl', title: 'Button URL', type: 'url' },
      { name: 'variant', title: 'Variant', type: 'string', options: { list: ['primary','secondary'] } }
    ],
    preview: { select: { title: 'text' } }
  }
  