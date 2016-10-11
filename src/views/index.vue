<style scoped lang="less">
.content{
    box-sizing : border-box;
    margin: 50px 100px;
    .topics{
        .cell{
            display : flex;
            border-top: 1px solid #f0f0f0;
            line-height : 2em;
            justify-content:space-between;

            .avatar {
                min-width : 40px;
                height : 40px;
                border-radius: 5px;
            }
            .topic_title {
                text-overflow : ellipsis;
                overflow: hidden;
                white-space:nowrap;
                text-indent : 1.5em;
                width : 500px;
                flex-grow : 2;
                .topic_title_content {
                    line-height : 40px;
                    font-size : 15px;
                    white-space:nowrap;
                }
            }
            .last_reply_time{
                font-size:12px;
                min-width : 40px;
            }

        }
        
    }
}

</style>
<template>
    <navbar></navbar>

    <div class="content">
        <topictab></topictab>
        <ul class="topics">
             <li v-for="topic in topics">
                 <div class="cell">
                     <img :src="topic.author.avatar_url" alt="avatar" class="avatar">
                     <div class="topic_title"><span class="topic_title_content">{{topic.title}}</span></div>
                     <div class="last_reply_time" >
                         {{topic.last_reply_at | fromNow}}
                     </div>
                     
                 </div>
             </li>
        </ul>          
    </div>
  
</template>
<script>
    import navbar from "../components/nav";
    import topictab from "../components/topictab";

    export default {
        data () {
            return {
                queryParams : {
                    page : 1,
                    tab : 'all',
                    limit : 20,
                    mdrender : true
                },
                topics : ''
            }
        },
        methods : {
            getTopics(){
                this.$http.get('https://cnodejs.org/api/v1/topics',this.queryParams)
                    .then(response => {
                        console.log(response.data.data[0].id)
                        let topics = response.data.data
                        sessionStorage.setItem('topics',JSON.stringify(topics))
                    })
                }
        },
        ready () {
            let message = sessionStorage.getItem('topics')
            message ?console.log('ok') :this.getTopics()

            this.topics = JSON.parse(message)
        },
        beforeDestroy () {
            console.log("I'm leaving now")
        },
        components:{
            navbar,topictab
        },
    }
</script>
