<script>
import fs from 'fs'

export default {
	data() {
		return {
			fileList: [],
		}
	},
	created() {
		this.getFileList()
	},
	methods: {
		getFileList() {
            try {
                let tempFiles = [];
                tempFiles = fs.readdirSync('./public/Images')
                if (tempFiles[0] == '.DS_Store') {
                    tempFiles.splice(0,1);
                }
                this.fileList = tempFiles
            } catch (error) {
                console.log('Error: ', error)
            }
        }
	},
}
</script>

<template>
    <div v-for="row in makeRows(fileList.length)" :id="'Row' + (makeRows(fileList.length) - row + 1)" class="Row">
        <Photo :row="makeRows(fileList.length) - row + 1" :imageCount="fileList.length" />
    </div>
</template>