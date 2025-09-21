export default {
    name: 'videoEmbed',
    title: 'Video Embed',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'videoDoc', title: 'Reference Video Doc', type: 'reference', to: [{ type: 'video' }] },
      { name: 'videoUrl', title: 'Video URL', type: 'url' },
      { name: 'thumbnail', title: 'Thumbnail', type: 'image' }
    ],
    preview: { select: { title: 'title', media: 'thumbnail' } }
  }
  