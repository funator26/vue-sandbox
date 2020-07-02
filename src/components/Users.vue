<template>
    <div>
        Here is Users Components!
        <ul>
            <li v-for="user in users" :item="user" :key="user.id" >
                ID: {{ user.id }}, Name: {{ user.name }},
                Department_id: {{ user.department_id }}, Password: {{ user.password }}
            <li/>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Users',
    data() {
        return {
            users: null
        }
    },
    mounted() {
        axios
            .get('http://localhost:3001/users')
            .then(response => {
                this.users = response.data
            })
    }
}
</script>

<style scoped>
</style>
