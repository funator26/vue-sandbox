<template>
  <div id="app">
    <Header />
    Hello {{ name }} !
    <ArticleList />
    <Users />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ArticleList from './components/ArticleList.vue'
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Header,
    ArticleList,
    Users
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
