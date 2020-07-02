<template>
    <div>
        <ul>
            DepartmentList:
            <department-item v-for="department in departments" 
                :item="department" :key="department.id" />
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import DepartmentItem from './DepartmentItem.vue'

export default {
    name: 'DepartmentList',
    components: {
        DepartmentItem
    },
    data() {
        return {
            departments: null
        }
    },
    mounted() {
        axios
            // .get('http://localhost:3001/departmentList')
            .get('/spring-boot-aks/departments')
            .then(response => {
                this.departments = response.data
        })
    }
}
</script>

<style scoped>

</style>