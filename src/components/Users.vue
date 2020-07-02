<template>
    <div>
        Here is Users Components!
        <ul>
            <li v-for="user in users" :item="user" :key="user.id" >
                <UserItem :item="user" :key="user.id" />
            <li/>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import UserItem from './UserItem'

export default {
	name: 'Users',
    data() {
        return {
            users: null
        }
    },
    components: {
        UserItem
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
