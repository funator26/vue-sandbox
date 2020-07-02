<template>
    <div>
        ID: {{ item.id }}, Name: {{ item.name }},
        Department_id: {{ item.department_id }}, Position: {{ item.potision }}
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
