<template>
    <div>
        ID: {{ item.id }}, Name: {{ item.name }},
        Department_Name: {{ item.department.name }}, Position: {{ item.position }}
    </div>
</template>

<script>
export default {
	name: 'UserItem',
    props: ['item']
}
</script>

<style scoped>
</style>
