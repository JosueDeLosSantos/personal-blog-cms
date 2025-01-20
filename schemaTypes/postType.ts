import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(100)
          .warning('Title is required and should be less than or equal to 100 characters'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required().error('This is used for the URL'),
      options: {
        source: 'title',
      },
      hidden: ({document}) => !document?.title,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(300)
          .warning('Description is required and should be less than or equal to 300 characters'),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
