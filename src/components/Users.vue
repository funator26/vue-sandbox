<template>
    <div>
        Users
        {{ users }}
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
