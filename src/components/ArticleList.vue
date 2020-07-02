<template>
    <div>
        <ul>
            <article-item v-for="article in articleList" 
                :item="article" :key="article.id" />
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import ArticleItem from './ArticleItem.vue'

export default {
	name: 'ArticleList',
	data() {
		return {
			articleList: null
    }
  },
  components: {
    ArticleItem
  },
  method: {
    hogeMethod() {
      console.log('called hogeMethod in ArticleList Component')
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
