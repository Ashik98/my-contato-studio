export default {
    name: 'newsletterSignup',
    title: 'Newsletter Signup',
    type: 'object',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subText', title: 'Sub text', type: 'text' },
      { name: 'placeholder', title: 'Email placeholder', type: 'string', initialValue: 'you@example.com' }
    ],
    preview: { select: { title: 'title' } }
  }
  