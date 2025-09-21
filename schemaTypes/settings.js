export default {
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      { name: 'siteTitle', title: 'Site Title', type: 'string' },
      { name: 'logo', title: 'Logo', type: 'image' },
      { name: 'favicon', title: 'Favicon', type: 'image' },
      { name: 'footerText', title: 'Footer Text', type: 'text' },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [{ type: 'url' }],
      },
    ],
  }
  