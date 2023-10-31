<template>
    <button class="btn-noraml" :style="{ backgroundColor: defaultVari(variant) }" @click="click">{{ text }}</button>
</template>
<script>
export default {
    name: 'DButton',
    props: {
        text: String,
        variant: {
            type: String,
            default: ''
        }
    },
    computed: {
        defaultVari(){
            return this.variant === 'primary' ? '#dac' : 'aqua'
        }
    },
    methods: {
        click(){
            this.$emit('click')
        }
    }
}
</script>


<style>
@import './DButton.css';
</style>
