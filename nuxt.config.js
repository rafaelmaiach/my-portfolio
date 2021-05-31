export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'my-portfolio',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	cache: true,

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/axe.js', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: false,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		'nuxt-windicss',
		'@nuxtjs/date-fns',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		'nuxt-i18n',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
	],

	parallel: true,

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en',
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	i18n: {
		defaultLocale: 'en',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'rmc_myportfolio_i18n',
			onlyOnRoot: true,
		},
		lazy: true,
		langDir: 'lang/',
		locales: [
			{
				code: 'en',
				iso: 'en-US',
				file: 'en-US.js',
			},
			{
				code: 'pt',
				iso: 'pt-BR',
				file: 'pt-BR.js',
			},
		],
		seo: true,
	},

	sitemap: {
		hostname: 'https://rafaelmaia.vercel.com',
		gzip: true,
	},

	windicss: {
		scan: {
			dirs: ['./'],
			exclude: [
				'node_modules',
				'dist',
				'.git',
				'.github',
				'.nuxt',
				'assets',
				'.husky',
				'lang',
				'plugins',
				'static',
				'types',
				// testing files & folders
				'coverage',
				'**/__snapshots__',
				'*.test.js',
				'*.spec.js',
			],
		},
	},
};
