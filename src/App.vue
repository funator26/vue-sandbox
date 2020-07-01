<template>
  <div id="app">
    <Header />
    Hello {{ name }} !
    <HelloWorld />
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import ArticleList from './components/ArticleList.vue'
import HelloWorld from './components/ArticleList.vue'

export default {
  name: 'App',
  components: {
    Header,
    // ArticleList
    HelloWorld
  },
  data() {
    return {
      name: 'funato'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
