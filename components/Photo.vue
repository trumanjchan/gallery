<script setup>
const props = defineProps({
  row: {
    type: Number,
    required: true,
  },
});
const { row } = props;
</script>

<template>
	<div v-for="image in imageCount()">
		<div v-if="row*3 == image">{{ "image" + image }}</div>
		<div v-if="row*3 == image+1">{{ "image" + image }}</div>
		<div v-if="row*3 == image+2">{{ "image" + image }}</div>

		<img v-if="row*3 == image" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
		<img v-if="row*3 == image+1" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
		<img v-if="row*3 == image+2" :id="image" :src="'/Images/IMG_' + image + '.webp'" :alt="'IMG_' + image">
	</div>
</template>