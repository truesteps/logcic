// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,

	build: {
		transpile: ['oh-vue-icons']
	},

	app: {
		head: {
			charset: 'utf-16',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Patrik Jánosdeák',
			meta: [
				{
					name: 'description',
					content: 'You probably came to the wrong place. But if you want to hire me don\'t just fuck off and get disappointed by the amateurish site. MAN THE FUCK UP AND HIRE ME BITCH!'
				},
				{
					name: 'keywords',
					content: 'backend, backend developer, php, laravel, vue, frontend, frontend developer, fullstack developer, nodejs, node js, javascript, nuxt, vue, moleculer'
				},
				{
					name: 'author',
					content: 'Patrik Jánosdeák'
				}
			],
		}
	},

	modules: [
		'@nuxtjs/tailwindcss'
	],

	plugins: [
		'~/plugins/ohVueIcons.ts',
	]
});
