<template>
  <div id="app">
    <Header />
    Hello {{ name }} !
    <ArticleList />
    <Users />
    <DepartmentList />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ArticleList from './components/ArticleList.vue'
import Users from './components/Users.vue'
import DepartmentList from './components/DepartmentList.vue'

export default {
  name: 'App',
  components: {
    Header,
    ArticleList,
    Users,
    DepartmentList
  },
  data() {
    return {
      name: 'Funato'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
