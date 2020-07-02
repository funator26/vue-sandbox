<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    data() {
        return {
            articleList: null
        }
    },
    mounted () {
        axios
        .get('http://localhost:3001/articleList')
        .then(response => {
            this.articleList = response.data
      })
  }
}
</script>

<style scoped>
</style>
