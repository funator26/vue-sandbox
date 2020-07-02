<template>
    <div class="article">
        ID: {{ item.id }}, Title: {{ item.title }}
        <div>
            <span>{{ item.content }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: ['item']
}
</script>

<style scoped>
.article {
    margin: 10px
}
</style>
