<template>
    <ul class="topics">
        <li v-for="topic in topics">
            <div class="cell">
                <img :src="topic.author.avatar_url"  class="avatar" v-link="{name:'user',params:{loginname:topic.author.loginname}}" onerror="this.src=''">
                
                <div class="topic_title" v-link="{name:'topic',params:{id:topic.id}}">
                    <span class="topic_title_tab">{{topic.tab | getTab}}</span>
                    <span class="topic_title_content">
                        <a href="javascript:;">{{topic.title}}</a>
                    </span>
                </div>
                <div class="last_reply_time" >
                 {{topic.last_reply_at | fromNow}}前
                </div>
            </div>
        </li>
    </ul> 
</template>
<script>
    export default {
        props : ['topics'],
        ready () {
            //console.log(this.topics)
        }
    }
</script>
<style lang="less">
    .topics{
        background-color : #fff;
        @media screen and (max-width: 720px) {
            padding-top : 36px;
        }       
        .cell{
            display : flex;
            border-top: 1px solid #f0f0f0;
            line-height : 2em;
            justify-content:space-between;            
            .topic_title {
                text-overflow : ellipsis;
                overflow: hidden;
                white-space:nowrap;
                text-indent : 0.5em;
                font-size : 14px;
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
                .topic_title_tab {
                    display: inline-block;
                    font-size: 12px;
                    text-align: center;
                    width: 47px;
                }
            }
            .last_reply_time{
                font-size : 12px;
                min-width : 60px;
                text-align: right;
            }
        }    
    }
</style>