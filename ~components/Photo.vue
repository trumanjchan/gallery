<script>
	let Finder = require('fs-finder')
	let finder = new Finder('./public/Images')
	let files = finder.recursively().findFiles()
	const imageCount = files.length

	export default {
		data () {
			return {
				imageCount : files.length
			}
		},
	}
</script>

<template>
  	<img v-for="image in imageCount" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
</template>
