
<template id="main">
    <div class="content">
        <topictab></topictab>
        <ul class="topics">
            <li v-for="topic in topics">
                <div class="cell">
                    <img :src="topic.author.avatar_url" alt="avatar" class="avatar">
                    
                    <div class="topic_title" v-link="{name:'topic',params:{id:topic.id}}">
                        <span>{{topic.tab | getTab}}</span>
                        <span class="topic_title_content">
                            <a href="javascript:;">{{topic.title}}</a>
                        </span>
                    </div>
                    
                    <div class="last_reply_time" >
                     {{topic.last_reply_at | fromNow}}
                    </div>

                </div>
            </li>
        </ul>          
    </div>
  
</template>
<script>
    
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
                topics : []
            }
        },
        methods : {
            getTopics(query, callback){
                var params = 'page=' + query.page + '&tab=' + query.tab + '&limit='+ query.limit + '&mdrender=' + query.mdrender
                console.log(params)
                this.$http.get('https://cnodejs.org/api/v1/topics?'+ params)
                    .then(response => {
                        let topics = response.data.data
                        sessionStorage.topics = JSON.stringify(topics)
                        callback(topics)
                    }, err => {console.log(err)})
                }
        },
        ready () {

            let message = sessionStorage.getItem('topics')
            message ?console.log('ok') :this.getTopics(this.queryParams,topics => {
                this.topics = topics
            })
            this.topics = JSON.parse(message)
        },
        events : {
            "changeTab" : function (tab) {
                this.queryParams.tab = tab
                var queryParams = {
                    page : this.queryParams.page,
                    tab : this.queryParams.tab,
                    limit : this.queryParams.limit,
                    mdrender : this.queryParams.mdrender
                }

                this.getTopics(queryParams, (topics) => {
                    this.topics = topics

                } )
            }
        },
        components:{
            topictab
        }
    }
</script>
<style scoped lang="less">
.content{
    box-sizing : border-box;

    .topics{
        background-color : #fff;
        .cell{
            display : flex;
            border-top: 1px solid #f0f0f0;
            line-height : 2em;
            justify-content:space-between;

            
            .topic_title {
                text-overflow : ellipsis;
                overflow: hidden;
                white-space:nowrap;
                text-indent : 1.5em;
                font-size : 14px;
                @media screen and (max-width:960px) {
                    text-indent : 0.8em;
                }
                width : 500px;
                flex-grow : 2;
                .topic_title_content {
                    padding-left : 1em;
                    line-height : 40px;
                    font-size : 15px;
                    white-space:nowrap;
                }
                a {
                    color: initial;
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
