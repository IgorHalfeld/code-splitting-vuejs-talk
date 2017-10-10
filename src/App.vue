<template>
  <div id="app" class="wrapper">
    <h1 class="title">{{ msg }}</h1>
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
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  font-family: sans-serif;
}

html,
body {
  width: 100%;
  height: 100%;
}

.wrapper {
  background-color: purple;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 40px;
  margin-bottom: 20px;
}

.divider {
  margin: 10px 0;
  padding: 10px 40px;
  border: dashed 1px white;
}
</style>
