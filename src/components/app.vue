<style scoped lang="less">
    @import '../styles/common.css';
    .routerview{
        box-sizing: border-box;
        background-color: #f0f0f0; 
        
        .content-view {
            padding: 0 0;
            background-color: #fff;
            @media screen and (min-width:720px) {
                padding-left:240px;               
            }
            .topic_wrap {
                @media screen and (min-width:720px) and (max-width:1120px) {
                    max-width: 640px;            
                }
            }
            .topic_wrap {
                @media screen and (min-width:1120px) {
                    padding-right:240px;               
                }
            }

        }
    }
</style>
<template>
    <div class="routerview">  
        <div class="content-view">
            <router-view></router-view>
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
