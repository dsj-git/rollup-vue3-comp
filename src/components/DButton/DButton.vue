<template>
    <button class="btn-noraml" :style="defaultVari" :disabled="disabled" @click="click">{{ text }}</button>
</template>
<script>
export default {
    name: 'DButton',
    props: {
        text: String,
        variant: {
            type: String,
            default: ''
        },
        disabled: Boolean
    },
    computed: {
        defaultVari() {
            return `backgroundColor:${this.variant === 'primary' ? '#dac' : this.disabled ? '#dbdbdb' : 'aqua'}`
        }
    },
    methods: {
        click() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './DButton.scss';
</style>
