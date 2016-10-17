<style scoped lang="less">
    @import '../styles/common.css';
    .routerview{
        box-sizing: border-box;
        background-color: #f0f0f0; 
        .content-view {
            padding: 10px 100px;
            background-color: #fff;
            @media screen and (max-width:960px) {
                padding: 0 0; 
            }
        }
    }
</style>
<template>
    <div class="routerview">
        <navbar></navbar>
        <div class="content-view">
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
    import navbar from "./nav";
    export default {
        http: {
            root: '/root',
            headers: {
              Authorization: 'Basic YXBpOnBhc3N3b3Jk'
            }
        },
        components : {
            navbar
        }
    }
</script>
