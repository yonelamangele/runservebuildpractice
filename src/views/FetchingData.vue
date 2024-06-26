<template>
    <div>
        <u> Projects </u>
        <div v-for="project in $store.state.projects" :key="project.name">
            <h1> {{ project.name }} </h1>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        getAboutMe() {
           return this.$store.dispatch('getAboutMe')
        }
    },
    mounted() {
        this.getAboutMe
    }
}
</script>
<style>
    
</style>