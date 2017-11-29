<template>
  <div>
    <button @click='increment'>Increment +1</button>
    <button @click='decrement'>Decrement -1</button>
    <h3>Count is {{ getCount }}</h3>
    <about></about>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import about from './About.vue'
export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  },
  computed: {
    ...mapGetters(
       ['getCount']
    )
  },
  components: {
    about
  }
}
</script>
<style lang="scss">
// @import "../assets/common.scss";
  body {
    // background-color: $purple;
  }
</style>
