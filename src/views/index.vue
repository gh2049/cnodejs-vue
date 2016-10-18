<template id="main" v-cloak>
    <div class="content">
        <topictab></topictab>
        <topiclist :topics="topics"></topiclist>      
    </div>
  
</template>
<script>
    
    import topictab from "../components/topictab";
    import topiclist from "../components/topiclist";

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
            topictab,topiclist
        }
    }
</script>
<style scoped lang="less">
.content{
    box-sizing : border-box;
    
}
[v-cloak] {
  display: none;
}
</style>
