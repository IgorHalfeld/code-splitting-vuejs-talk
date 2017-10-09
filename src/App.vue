<template>
  <div class="wrapper" id="app">
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>

    <router-view></router-view>
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
}

html,
body,
.wrapper {
  width: 100%;
  height: 100%;
}

.nav {
  position: absolute;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
}

.nav ul {
  list-style: none
}

.nav ul li a {
  text-decoration: none;
  color: #444;
}
.nav ul li a:hover {
  text-decoration: underline;
}
</style>
