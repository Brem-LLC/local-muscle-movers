import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
	storage: {
		kind: 'local',
		// kind: 'cloud',
	},
	cloud: {
		project: 'local-muscle-movers/local-muscle-movers',
	},
	singletons: {
		general: singleton({
			label: 'General Information',
			path: 'src/content/_general',
			schema: {
				logo: fields.image({
					label: 'Logo',
					description: 'Local Muscle Mover Logo',
					// This will output the images in the "public" directory
					directory: '/public/images/',
					publicPath: '/images/'
				}),
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
		})
	},
	collections: {
		pages: collection({
			label: 'Pages',
			path: 'src/content/pages/*/',
			slugField: 'name',
			schema: {
				name: fields.slug({ name: { label: 'Name' } }),
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
						shortHero: {
							label: 'Short Banner',
							schema: fields.object({
								backgroundImage: fields.image({
									label: 'Background Image',
									directory: 'public/images/shortHeros',
									publicPath: '/images/shortHeros/'
								}),
								title: fields.text({ label: 'Hero Title' }),
								description: fields.text({ label: 'Hero Description' })
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
								description: fields.text({ label: 'Description', multiline: true }),
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
						videoText: {
							label: 'Video and Text',
							schema: fields.object({
								video: fields.text({ label: 'Video code' }),
								heading: fields.text({ label: 'Heading' }),
								description: fields.text({ label: 'Description', multiline: true }),
								optionalLink: fields.object({
									link: fields.text({ label: 'Link URL' }),
									text: fields.text({ label: 'Link Text' })
								})
							})
						},
						testimonialCTA: {
							label: 'Testimonial CTA',
							schema: fields.object({
								personName: fields.text({ label: 'Person\'s Name' }),
								review: fields.text({ label: 'Review', multiline: true }),
							})
						},
						serviceSelector: {
							label: 'Service Selector',
							schema: fields.object({
								services: fields.array(
									fields.relationship({
										label: 'Services',
										collection: 'services'
									}),
									{
										label: 'Services',
										itemLabel: (props) => props.value !== null ? props.value : "Service"
									}
								)
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
										itemLabel: (props) => props.value !== null ? props.value : "Testimonial"
									}
								)
							})
						},
						headerText: {
							label: 'Header And Text',
							schema: fields.object({
								header: fields.text({ label: 'Header' }),
								text: fields.text({ label: 'Text', multiline: true }),
							})
						},
						movingChecklist: {
							label: 'Moving Checklist',
							schema: fields.object({
								header: fields.text({ label: 'Checklist Header' }),
								subtext: fields.text({ label: 'Text Under Header' }),
								image: fields.image({
									label: 'Moving Image',
									directory: 'public/images/resources',
									publicPath: '/images/resources/'
								}),
								checklist: fields.array(
									fields.text({ label: 'Checklist Item' }),
									{
										label: 'Checklist Items',
										itemLabel: (props) => props.value !== null ? props.value : "Checklist Item"
									}
								)
							})
						},
						policiesAndContracts: {
							label: 'Policies And Contracts',
							schema: fields.object({
								header: fields.text({ label: 'Header' }),
								subtext: fields.text({ label: 'Text Under Header' }),
								localPolicies: fields.array(
									fields.object({
										title: fields.text({ label: 'Policy / Contract' }),
										link: fields.url({
											label: 'Policy / Contract Link'
										})
									}),
									{
										label: 'Local Policies / Contracts',
										// itemLabel: (props) => props.fields.title !== null ? props.fields.title : "Policy"
									}
								),
								interstatePolicies: fields.array(
									fields.object({
										title: fields.text({ label: 'Policy / Contract' }),
										link: fields.url({
											label: 'Policy / Contract Link'
										})
									}),
									{
										label: 'Interstate Policies / Contracts',
										// itemLabel: (props) => props.fields.title !== null ? props.fields.title : "Policy"
									}
								),
								disclaimer: fields.text({ label: 'Disclaimer', multiline: true })
							})
						}
					},
					{ label: 'Component Blocks' }
				)
			}
		}),
		posts: collection({
			label: 'Posts',
			path: 'src/content/posts/*/',
			entryLayout: 'content',
			slugField: 'name',
			schema: {
				name: fields.slug({ name: { label: 'Name' } }),
				publishedOn: fields.date({ label: 'Heading' }),
				draft: fields.checkbox({ label: 'Description', defaultValue: true }),
				featuredImage: fields.image({
					label: 'Featured Image',
					directory: '/public/images/',
					publicPath: '/images/'
				}),
				content: fields.document({
					label: 'Content',
					formatting: true,
					links: true,
					images: true
				})
			}
		}),
		testimonials: collection({
			label: 'Testimonials',
			path: 'src/content/testimonials/*',
			slugField: 'name',
			schema: {
				name: fields.slug({ name: { label: 'Name' } }),
				quote: fields.text({ label: 'Quote', multiline: true })
			}
		}),
		services: collection({
			label: 'Services',
			path: 'src/content/services/*',
			slugField: 'name',
			schema: {
				name: fields.slug({ name: { label: 'Name' } }),
				heading: fields.text({ label: 'Heading' }),
				description: fields.text({ label: 'Description', multiline: true })
			}
		})
	}
})
