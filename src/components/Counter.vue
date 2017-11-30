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
  data() {
    return {
      res: [1, 2, 3, 4]
    }
  },
  methods: {
    ...mapActions(['increment', 'decrement']),
    asy: function() {
      return new Promise((resolve, reject) => {
        setTimeout(n => {
          console.log(new Date())
          resolve()
        }, 5000)
      })
    },
    fasdf: async function() {
      await this.asy()
    }
  },
  computed: {
    ...mapGetters(['getCount'])
  },
  components: {
    about
  },
  created() {
    this.fasdf()
    if (this.res.includes(1)) {
      console.log(123)
    }
  }
}
</script>
<style lang="scss">
body {
}
</style>
