<template>
	<div>
    <ul>
      <li v-for="article in articleList" :key="article.id">
        id: {{ article.id }}
        title: {{ article.title }}
      </li>
    </ul>

    {{ info }}
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'ArticleList',
	data() {
		return {
			articleList: [
				{
					id: 1,
					title: 'article title 1'
				},
				{
					id: 2,
					title: 'article title 2'
				},
				{
					id: 3,
					title: 'article title 3'
				}
      ],
      info: null
    }
	},
  method: {
    hogeMethod() {
      console.log('called hogeMethod in ArticleList Component')
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>

<style scoped>
</style>
