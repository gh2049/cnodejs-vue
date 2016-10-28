<style>
	.topic_wrap {
		background-color: #fdfdfd;
		margin: 0 auto;
	}
	
	.topic_header {
		border-bottom:1px #f0f0f0 solid;
		font-size: 1.5em;
		padding: 5px 5px;
	}
	.topic_header + div {
		font-size: 14px;
		color : inherit;
	}
	.topic_content {
		padding: 10px 0;
		border-bottom:1px #444 solid;
	}
	.reply_block {
		border-bottom:1px #f0f0f0 solid;
		padding: 5px 0;
	}
	.reply_msg {
		display: inline-block;
		height:40px; 
		line-height:40px; 
		overflow:hidden; 
		font-size: 14px;
	}
	[v-cloak] {
	  display: none;
	}
  @media screen and (min-width:720px) and (max-width:1200px) {
		.topic_wrap {
        max-width: 560px;            
    }
	}
  @media screen and (min-width:1200px) {
		.topic_wrap {
        margin-right:320px;               
        margin-left:320px;               
    }
	}
</style>
<template>

	<div class="topic_wrap" >
		
		<article v-if="topic.title">
		
		<header v-if="topic.title">
			<h2 class="topic_header">
				{{topic.title}}
			</h2>
			<div>
				<span>
					发布于 {{topic.create_at | fromNow}} 前
				</span>
				<span> 
					 作者
					 <a v-link="{name:'user',params:{loginname:(topic.author ? topic.author.loginname : '')}}">
					 	{{topic.author ? topic.author.loginname : ''}}
					 </a>
				</span>
				<span>
					{{topic.visit_count}}次浏览
				</span>
				<span>
					来自 {{topic.tab | getTab}}
				</span>
			</div>
		</header>
		
		<div class="markdown-body  topic_content">
			<div>{{{topic.content}}}</div>
		</div>
		<footer class="comments" v-if="topic.title">
			<div>{{getLength()}} 回复</div>
			<ul>
				<li v-for="reply in topic.replies" class="reply_block">
					<div>
						<img :src="reply.author.avatar_url" class="avatar" v-link="{name:'user',params:{loginname:reply.author.loginname}}">
						<span class="reply_msg">
							<a v-link="{name:'user',params:{loginname:reply.author.loginname}}">
								{{reply.author.loginname}}
							</a> {{$index+1}}楼 回复 {{reply.create_at | fromNow}}以前
						</span>					
					</div>
					<div class="markdown-body">
						{{{reply.content}}}
					</div>
				</li>
			</ul>
		</footer>
	
	</article>
	
	</div>
</template>
<script>
	export default {
		data () {
			let vm = this
			return {
				topicId : '',
				topic : {},
				show : false
			}
		},
		methods : {
			getLength () {
				return this.topic.replies?this.topic.replies.length : ''
			}
		},
		route : {
			data (transition) {
				let vm = this
				vm.topicId = transition.to.params.id
				this.$http.get('https://cnodejs.org/api/v1/topic/'+vm.topicId)
					.then (topicContent => {
						if(topicContent && topicContent.data){
          		vm.topic = topicContent.data.data
          		vm.show = true
          		sessionStorage.topic = JSON.stringify(vm.topic)
              }
              else{
                  console.log('err',topicContent)
    		    }
		    	})
      }
		}
	}
</script>