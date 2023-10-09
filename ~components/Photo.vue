<script>
import { imageCount } from '../assets/js/utility'

	export default {
		methods: {
			imageCount,
		},
	}
</script>

<template>
	<div>{{ imageCount() }}</div>
  	<img v-for="image in imageCount()" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
</template>
