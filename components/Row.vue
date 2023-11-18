<script>
import { onMounted } from 'vue'
import fs from 'fs'

export default {
    setup() {
        const fileList = useState('files', () => [])

        onMounted(() => console.log(fileList))

        return {
            fileList,
        }
    },
	created() {
		this.getFileList()
	},
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.15 });

        let children = document.getElementById("Gallery").childNodes
        for (let i = 0; i < children.length; i++) {
            if (document.getElementById(children[i].id)) {
                observer.observe(document.getElementById(children[i].id));
            }
        }
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

<style>
@import '~/assets/css/Component/Row.scss';
</style>

<template>
    <div v-for="row in makeRows(fileList.length)" :id="'Row' + (makeRows(fileList.length) - row + 1)" class="Row">
        <Photo :row="makeRows(fileList.length) - row + 1" :imageCount="fileList.length" />
    </div>
</template>