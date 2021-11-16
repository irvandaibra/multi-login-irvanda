<template>
    <div class="th">
        <button v-if="userRole === 'siswa'">siswa</button>
        <button v-if="userRole === 'guru'">guru</button>
        <button v-if="userRole === 'admin'">admin</button>
    </div>
</template>
<script>
export default{
    name: "link",
    computed: {
        userRole(){
            return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
        },
    },
};
</script>
<style>
    .th {
        text-align: center;
    }
</style>
