export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'bio', title: 'Bio', type: 'text' },
      { name: 'avatar', title: 'Avatar', type: 'image' },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [{ type: 'url' }]
      },
      { name: 'profileImage', title: 'Profile Image', type: 'image' },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: ['admin', 'editor', 'viewer']
        }
      }
    ]
  }
  