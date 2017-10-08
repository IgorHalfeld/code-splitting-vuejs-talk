<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <hr>
    <IGHeader />
    <IGArticle />
    <IGFooter />
  </div>
</template>

<script>
import IGHeader from './components/Header.vue'
import IGArticle from './components/Article.vue'

export default {
  name: 'app',
  components: {
    IGHeader,
    IGArticle,
    IGFooter: () => import(/* webpackChunkName: "footer" */ './components/Footer.vue')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
* {
  text-align: center;
}
</style>
