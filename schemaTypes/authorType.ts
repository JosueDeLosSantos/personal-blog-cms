import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(300)
          .warning('Bio is required and should be less than or equal to 300 characters'),
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) =>
        Rule.required()
          .max(2000)
          .warning('About is required and should be less than or equal to 2000 characters'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule) => Rule.required().email().warning('Enter a valid email-address'),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ['http', 'https'],
          })
          .warning('Enter a valid URL'),
    }),
    defineField({
      name: 'xtwitter',
      title: 'Xtwitter',
      type: 'url',
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ['http', 'https'],
          })
          .warning('Enter a valid URL'),
    }),
    defineField({
      name: 'istagram',
      title: 'Instagram',
      type: 'url',
      validation: (Rule) =>
        Rule.required()
          .uri({
            scheme: ['http', 'https'],
          })
          .warning('Enter a valid URL'),
    }),
  ],
})
