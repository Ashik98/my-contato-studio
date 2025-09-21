export default {
    name: 'imageGallery',
    title: 'Image Gallery',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          { type: 'image', title: 'Image', options: { hotspot: true } },
          { type: 'reference', to: [{ type: 'imageAsset' }], title: 'Reference ImageAsset' }
        ]
      },
      { name: 'columns', title: 'Columns', type: 'number', initialValue: 3 }
    ],
    preview: {
      select: { title: 'title', media: 'images.0' }
    }
  }
  