<template>
    <div>
       ID: {{ item.id }}, Name: {{ item.name }}
    </div>
</template>

<script>
export default {
    name: 'DepartmentItem',
    props: ['item']
}
</script>

<style scoped>
</style>
