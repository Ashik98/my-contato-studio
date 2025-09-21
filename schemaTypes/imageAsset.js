export default {
    name: 'imageAsset',
    title: 'Image Asset',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      { name: 'alt', title: 'Alt Text', type: 'string' },
      { name: 'uploadedAt', title: 'Uploaded At', type: 'datetime' }
    ]
  }
  