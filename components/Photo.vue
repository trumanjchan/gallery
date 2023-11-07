<script>
export default {
	props: {
    	row: Number,
		imageCount: Number,
  	},
}
</script>

<template>
	<div v-for="image in imageCount">
		<div v-if="row*3 == image || row*3 == image+1 || row*3 == image+2" class="Cell">
			<img v-if="row*3 == image" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image" />
			<img v-if="row*3 == image+1" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image" />
			<img v-if="row*3 == image+2" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image" />
		</div>
	</div>
</template>