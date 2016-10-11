<style scoped>
    @import '../styles/common.css';
    .routerview{
        box-sizing: border-box;
    }
</style>
<template>
    <div class="routerview">
        <router-view></router-view>
    </div>
</template>
<script>
    import {LoadingBar} from "iview";
    export default {
        beforeEach () {     
            LoadingBar.start()
        },
        data () {
            LoadingBar.finish()
            return {}
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {

        },
        http: {
            root: '/root',
            headers: {
              Authorization: 'Basic YXBpOnBhc3N3b3Jk'
            }
        }
    }
</script>
