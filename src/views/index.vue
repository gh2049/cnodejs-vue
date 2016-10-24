<template v-cloak>
    <div id="main">
        <navbar></navbar>
        <topiclist :topics="topics"></topiclist>     
        <div class="pagination">
            <button @click="changPage(0)"><=</button><button @click="getPage(list)" v-for="list in lists" :class="{'current-page' : currentPage===list}">
                {{list}}
            </button><button @click="changPage(1)">=></button>
        </div>
    </div>
    
</template>
<script>
    import topiclist from "../components/topiclist";
    import navbar from "../components/nav";

    export default {
        data () {
            return {
                queryParams : {
                    page : 1,
                    tab : 'all',
                    limit : 20,
                    mdrender : true
                },
                topics : [],
                lists : [1,2,3,4,5],
                currentPage : 1
            }
        },

        methods : {
            getTopics(query, callback){
                this.$http.get('https://cnodejs.org/api/v1/topics',{params : query } )
                    .then(response => {
                        let topics = response.data.data
                        sessionStorage.topics = JSON.stringify(topics)
                        callback(topics)
                    }, err => {console.log(err)})
            },
            getPage(val) {              
                this.queryParams.page = val
                console.log('ok')
                this.getTopics(this.queryParams, (topics) => {
                    this.topics = topics
                    this.currentPage = val
                    if(val>=3) this.lists = [val-2,val-1,val,val+1,val+2]
                    if(val== (2 ||1)) this.lists =  [1,2,3,4,5]     
                })    
            },
            changPage(num) {
                if (num === 0) {
                    if (this.currentPage === 1) return
                    this.getPage(this.currentPage - 1)
                } else if (num === 1) {
                    this.getPage(this.currentPage + 1)
                }
            }
        },
        ready () {
            let message = sessionStorage.getItem('topics')
            message 
                ?console.log('ready') 
                :this.getTopics(this.queryParams,topics => {
                    this.topics = topics
                })
            this.topics = JSON.parse(message)
        },
        events : {
            "changeTab" : function (tab) {
                this.queryParams.tab = tab
                this.getTopics(this.queryParams, (topics) => {
                    this.topics = topics
                } )
            }
        },
        components:{
            topiclist,navbar
        }
    }
</script>
<style scoped >
[v-cloak] {
  display: none;
}

.pagination {
    padding: 5px 5px;
}
.pagination button {
    width: 3rem;
    height: 1.5rem;
    border:1px #f0f0f0 solid;
    font-size: 14px;
    cursor: pointer;
    background-color: #fff;
    border-right: none;
    opacity: 0.5;
}
.pagination button:first-child{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.pagination button:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 1px #f0f0f0 solid;
}
.pagination button:hover {
    background-color: #f3f3f3;
}
.current-page {
    color:#93b94d;
}

@media screen and (min-width:720px) {
    #main{
        padding-left:240px !important; 
    }         
}

</style>
