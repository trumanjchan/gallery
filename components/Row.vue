<template>
    <div v-for="row in makeRows(imageCount())" :id="'Row' + row" class="Row">
        {{ "Row_" + row }}
        <Photo :row="row" />
    </div>
</template>