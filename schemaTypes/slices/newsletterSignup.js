export default {
    name: 'newsletterSignup',
    title: 'Newsletter Signup',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3,
        validation: Rule => Rule.required()
      },
      {
        name: 'placeholder',
        title: 'Input Placeholder',
        type: 'string',
        initialValue: 'Enter your email'
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        initialValue: 'Subscribe'
      },
      {
        name: 'successMessage',
        title: 'Success Message',
        type: 'string',
        initialValue: 'Thanks for subscribing!'
      }
    ],
    preview: {
      select: { title: 'title', subtitle: 'description' },
      prepare({ title, subtitle }) {
        return {
          title: title || 'Newsletter Signup',
          subtitle
        }
      }
    }
  }
  