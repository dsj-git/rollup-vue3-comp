<template>
  <div class="hello">
    <span class="hello-msg">{{ msg }}</span>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    }
}
</script>

<style lang="scss" scoped>
@import './HelloWorld.scss';
</style>
