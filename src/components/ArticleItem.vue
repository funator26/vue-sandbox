<template>
    <div>
       ID: {{ item.id }}, Title: {{ item.title }}
    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: ['item']
}
</script>

<style scoped>
</style>
