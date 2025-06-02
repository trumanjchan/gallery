// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	nitro: {
    	preset: 'node-server'
  	},
	devtools: { enabled: true },
  	app: {
    	head: {
      		title: "Truman's Gallery"
    	}
  	},
	vite: {
		css: {
		  	preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/css/global.scss" as *;'
				}
		  	}
		}
	},
	modules: [
		"nuxt-lazy-load"
	],
	lazyLoad: {
		// Variables
		images: true,
		videos: true,
		audios: true,
		iframes: true,
		native: false,
		directiveOnly: true,
		
		// Default image must be in the public folder
		//defaultImage: 'placeholder.webp',
	  
		// To remove class set value to false
		loadingClass: 'isLoading',
		loadedClass: 'isLoaded',
		appendClass: 'lazyLoad',
	}
})