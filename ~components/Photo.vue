<script>
import { imageCount, makeRows } from '../assets/js/utility'

export default {
	methods: {
		imageCount,
		makeRows,
	}
}
</script>

<template>
  	<img v-for="image in imageCount()" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">

	<div v-for="row in makeRows(imageCount())" :id="'Row' + row" class="Row">
		Hi
	</div>
</template>
