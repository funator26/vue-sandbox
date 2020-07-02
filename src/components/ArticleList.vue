<template>
    <div>
        <ul>
            <li v-for="article in articleList" :key="article.id">
                id: {{ article.id }}
                title: {{ article.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ArticleList',
	data() {
		return {
			articleList: null
    }
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
