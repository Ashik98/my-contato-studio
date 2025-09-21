export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'url', title: 'Video URL', type: 'url' },
      { name: 'thumbnail', title: 'Thumbnail', type: 'image', options: { hotspot: true } },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'uploadedAt', title: 'Uploaded At', type: 'datetime' },
    ],
  }
  