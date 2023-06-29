import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
	storage: {
		// kind: 'github',
		// repo: {
		// 	owner: "Brem-LLC",
		// 	name: "local-muscle-movers",
		// },
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
				hours: fields.text({ label: 'Hours of Operation' })
			}
		}),
		menu: singleton({
			label: 'Main Menu',
			path: 'src/content/_mainMenu',
			schema: {
				menuItems: fields.array(
					fields.object({
						name: fields.text({ label: 'Name' }),
						link: fields.text({ label: 'Link' }),
						button: fields.checkbox({
							label: 'Link is button?',
							description: 'Check this box to turn the link into a button on the navbar.'
						})
					}),
					{
						label: 'Menu Builder',
						itemLabel: (props) => props.fields.name.value
					}
				)
			}
		}),
		homePage: singleton({
			label: 'Home Page',
			path: 'src/content/_homePage',
			schema: {
				componentBlocks: fields.blocks(
					{
						banner: {
							label: 'Banner',
							schema: fields.object({
								bannerImage: fields.image({
									label: 'Banner Image',
									directory: 'public/images/home',
									publicPath: '/images/home/'
								}),
								heading: fields.text({ label: 'Heading' }),
								subheading: fields.text({ label: 'Subheading', multiline: true }),
								buttonText: fields.text({ label: 'Button Text' }),
								buttonLink: fields.text({ label: 'Button Link' })
							})
						},
						imageText: {
							label: 'Image and Text',
							schema: fields.object({
								image: fields.image({
									label: 'Image',
									directory: 'public/images/blocks',
									publicPath: '/images/blocks/'
								}),
								heading: fields.text({ label: 'Heading' }),
								desciption: fields.text({ label: 'Description', multiline: true }),
								imagePlacement: fields.select({
									label: 'Image Placement',
									description: 'Choose whether the image should be on the left or right.',
									options: [
										{ label: 'Left', value: 'left' },
										{ label: 'Right', value: 'right' }
									],
									defaultValue: 'left'
								})
							})
						},
						testimonialSelector: {
							label: 'Testimonial Selector',
							schema: fields.object({
								testimonials: fields.array(
									fields.relationship({
										label: 'Testimonials',
										collection: 'testimonials'
									}),
									{
										label: 'Testimonials',
										itemLabel: (props) => props.value
									}
								)
							})
						}
					},
					{ label: 'Component Blocks' }
				)
			}
		})
	},
	collections: {
		testimonials: collection({
			label: 'Testimonials',
			path: 'src/content/testimonials/*/',
			slugField: 'name',
			schema: {
				name: fields.slug({ name: { label: 'Name' } }),
				quote: fields.text({ label: 'Quote', multiline: true })
			}
		}),
		services: collection({
			label: 'Services',
			path: 'src/content/services/*/',
			slugField: 'name',
			schema: {
				name: fields.slug({ name: { label: 'Name' } }),
				heading: fields.text({ label: 'Heading' }),
				description: fields.text({ label: 'Description', multiline: true })
			}
		})
	}
})
