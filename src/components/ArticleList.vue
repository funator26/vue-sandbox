<template>
    <div>
        <ul>
            <li v-for="article in articles" :key="article.id">
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
			articles: null
        }
	},
    method: {
          hogeMethod() {
              console.log('called hogeMethod in ArticleList Component')
          }
    },
    mounted () {
        axios
        //   .get('http://localhost:3001/articleList')
            .get('/spring-boot-aks/articles')
            .then(response => {
                this.articles = response.data
        })
    }
}
</script>

<style scoped>
</style>
