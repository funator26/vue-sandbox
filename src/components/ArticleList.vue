<template>
    <div>
        <ul>
            <article-item v-for="article in articles" 
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
			articles: null
        }
	},
    method: {
          hogeMethod() {
              console.log('called hogeMethod in ArticleList Component')
          }
    },
    components: {
        ArticleItem
    },
    mounted () {
        axios
          .get('http://localhost:3001/articleList')
            // .get('/spring-boot-aks/articles')
            .then(response => {
                this.articles = response.data
        })
    }
}
</script>

<style scoped>
</style>
