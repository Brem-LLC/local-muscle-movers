import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    general: singleton({
      label: 'General Information',
      path: 'src/content/_general',
      schema: {
        title: fields.text({ label: 'Title' }),
        usdot: fields.text({ label: 'USDOT Number' }),
        phone: fields.text({ label: 'Phone Number Maine' }),
        phoneSecondary: fields.text({ label: 'Phone Number Vermont' }),
        email: fields.text({ label: 'Email Address' }),
        hours: fields.text({ label: 'Hours of Operation' }),
      },
    }),
  },
  collections: {
    testimonials: collection({
      label: 'Testimonials',
      path: 'src/content/testimonials/*/',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Name' }}),
        quote: fields.text({ label: 'Quote', multiline: true }),
      },
    }),
    services: collection({
      label: 'Services',
      path: 'src/content/services/*/',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Name' }}),
        heading: fields.text({ label: 'Heading' }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
})
