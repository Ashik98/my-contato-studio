export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
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
        { type: 'newsletterSignup' } // ✅ added here
      ]
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      validation: Rule => Rule.max(160).warning('SEO descriptions should be under 160 characters.')
    }
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content'
    },
    prepare({ title, content }) {
      return {
        title,
        subtitle: `${content?.length || 0} section(s)`
      }
    }
  }
}
