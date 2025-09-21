export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Page Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'hero' },
        { type: 'textBlock' },
        { type: 'imageGallery' },
        { type: 'ctaBanner' },
        { type: 'featureList' },
        { type: 'testimonial' },
        { type: 'videoEmbed' },
        { type: 'authorBlock' },
        { type: 'blogList' },
        { type: 'newsletterSignup' }
      ],
    },
    { name: 'seoDescription', title: 'SEO Description', type: 'text' },
  ],
}
