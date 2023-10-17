<script>
import { imageCount, makeRows } from '../assets/js/utility'

export default {
	methods: {
		imageCount,
		makeRows,
	},
}
</script>

<template>
	<div v-for="row in makeRows(imageCount())" :id="'Row' + row" class="Row">
		{{ "row" + row }}
		<div v-for="image in imageCount()">
			<!-- row1 1,2,3 row2 4,5,6 row3 7,8,9 row4 10,11,12 row5 13 -->
			<div v-if="row*3 == image">{{ "image" + image }}</div>
			<div v-if="row*3 == image+1">{{ "image" + image }}</div>
			<div v-if="row*3 == image+2">{{ "image" + image }}</div>

			<img v-if="row*3 == image" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
			<img v-if="row*3 == image+1" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
			<img v-if="row*3 == image+2" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
		</div>
	</div>
</template>