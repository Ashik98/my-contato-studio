export default {
    name: 'documentUpload',
    title: 'Document Upload',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Name or title for the uploaded document',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'URL-friendly identifier',
        options: {
          source: 'title',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
        description: 'Brief description about this document'
      },
      {
        name: 'file',
        title: 'Upload File',
        type: 'file',
        description: 'Upload any file (PDF, DOCX, XLSX, ZIP, etc.)',
        options: {
          storeOriginalFilename: true
        }
      },
      {
        name: 'image',
        title: 'Upload Image',
        type: 'image',
        description: 'Upload related image or thumbnail',
        options: {
          hotspot: true
        }
      },
      {
        name: 'video',
        title: 'Upload Video',
        type: 'file',
        description: 'Upload video file (mp4, mov, etc.)',
        options: {
          accept: 'video/*',
          storeOriginalFilename: true
        }
      },
      {
        name: 'textContent',
        title: 'Text Content',
        type: 'array',
        description: 'Optional rich text content about this upload',
        of: [{ type: 'block' }]
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        initialValue: () => new Date().toISOString()
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description',
        media: 'image'
      },
      prepare({ title, subtitle, media }) {
        return {
          title: title || 'Untitled Document',
          subtitle: subtitle || 'No description',
          media
        }
      }
    }
  }
  