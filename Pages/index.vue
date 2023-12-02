<script>
export default {
	data() {
		return {
			showModal: false,
		}
  	},
	methods: {
		findImgId(e) {
			if (e.target.id) {
				document.getElementById("modal-image").src = '/Images/IMG_' + e.target.id + '.webp'
				document.getElementsByTagName("body")[0].style.touchAction = "none"
				this.showModal = true
			} else {
				document.getElementsByTagName("body")[0].style.touchAction = "auto"
				this.showModal = false
			}
		}
	},
	beforeMount() {
    	document.getElementById("Gallery").addEventListener('click', this.findImgId)
  	},
  	beforeUnmount() {
		document.getElementById("Gallery").removeEventListener('click', this.findImgId)
  	}
}
</script>

<style>
@import '~/assets/css/Page/index.scss';
</style>

<template>
	<div id="Gallery">
		<Modal v-show="showModal" />
		<Row />
	</div>
</template>