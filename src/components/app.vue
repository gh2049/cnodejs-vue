<style scoped lang="less">
    @import '../styles/common.css';
    .routerview{
        box-sizing: border-box;
        height: 100%;
        
        .content-view {
            padding: 0 0;
            height: 100%;    
        }
    }
    .fade-transition {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>
<template>
    <div class="routerview">  
        <div class="content-view">
            <router-view transition="fade" transition-mode="out-in"></router-view>
        </div>
        
    </div>
</template>
<script>
    
    export default {
        http: {
            root: '/root',
            headers: {
              Authorization: 'Basic YXBpOnBhc3N3b3Jk'
            }
        }
    }
</script>
