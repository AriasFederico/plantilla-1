import mission from '../../public/about.webp';
import hero from '../../public/hero.webp';

export const global = {
	logo: {
		image: 'Brew & Bean',
		altText: 'Brew & Bean',
		url: '#',
	},

	header: {
		navigationLinks: [
			{ label: 'Home', url: '#' },
			{ label: 'Products', url: '#products' },
			{ label: 'About Us', url: '#about' },
		],

		menuBurguer: 'menu-outline',
	},

	hero: {
		title: 'Wake Up to ',
		span: 'Perfect ',
		endTitle: 'Coffee',
		description:
			'Experience the finest artisanal coffee, freshly roasted beans, and handcrafted beverages in a warm, welcoming atmosphere that feels like home.',
		ctaButton: [
			{ text: 'View Menu', url: '#products', variant: '', id: 1 },
			{ text: 'Contact Us', url: '#visit', variant: 'secondary', id: 2 },
		],
		image: hero,
	},

	products: {
		title: 'Our Products',
		description:
			'From single-origin coffees to handcrafted pastries, every item is made with passion and the finest ingredients.',
	},

	about: {
		title: 'About Brew & Bean', // CAMBIAR AL NOMBRE DEL NEGOCIO

		description: [
			'Founded in 2018, Brew & Bean started as a dream to bring exceptional coffee culture to our community. We believe that every cup tells a story - from the farmers who grow our beans to the moment it reaches your hands.',
			`Our master roasters work tirelessly to bring out the unique characteristics of each origin, while our baristas craft every drink with precision and care. We're not just a coffee shop; we're a gathering place for friends, remote workers, and coffee enthusiasts alike.`,
		],
		mission: {
			image: mission,
			title: 'Our Mission',
			description:
				'To create meaningful connections through exceptional coffee, supporting both our local community and coffee-growing regions around the world with ethical sourcing and fair trade practices.',
		},
	},

	businessInfo: {
		title: 'Visit Us Today',
		storeDetails: [
			{
				icon: 'location-outline',
				title: 'Location',
				description1: '123 Coffee Street',
				description2: 'Downtown, City 12345',
			},
			{
				icon: 'time-outline',
				title: 'Hours',
				description1: 'Mon-Fri: 6:00 AM',
				description2: '8:00 PM Weekends: 7:00 AM - 9:00 PM',
			},
			{
				icon: 'call-outline',
				title: 'Contact',
				description1: '+1 (555) 123-BREW',
				description2: 'hello@brewandbean.com',
			},
		],
	},

	footer: {
		description: 'Crafting perfect moments, one cup at a time',
		socialMedia: [
			{
				icon: 'logo-instagram',
				plataform: 'Instagram',
				url: '#',
				target: '_blank',
			},
			{
				icon: 'logo-facebook',
				plataform: 'Facebook',
				url: '#',
				target: '_blank',
			},
			{
				icon: 'logo-twitter',
				plataform: 'Twitter',
				url: '#',
				target: '_blank',
			},
		],
		credit: {
			altText: 'Pagina web desarrollada por CODEFEX',
			url: 'https://codefex.site/',
		},
	},
};
