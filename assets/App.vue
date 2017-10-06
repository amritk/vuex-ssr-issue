<template>
  <v-app dark>
    <h1 v-if="title">title</h1>
    <h1>{{ title }}</h1>
    <router-view/>
  </v-app>
</template>

<script>
import Meta from 'mixins/meta'

export default {
  mixins: [Meta],

  created () {
    console.log('Parent created');
  },

  mounted () {
    console.log('Parent mounted');
  },

  computed: {
    title () {
      return this.$store.getters.title
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
