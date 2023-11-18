// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
	}
})