<template>
    <div class="Gallery reverse-order">
        <div v-for="row in makeRows(imageCount())" :id="'Row' + row" class="Row">
            <Photo :row="row" />
        </div>
    </div>
</template>