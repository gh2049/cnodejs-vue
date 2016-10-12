<style>
	.topic_header {
		border-bottom:1px #f0f0f0 solid;
		font-size: 1.5em;
		padding: 5px 5px;
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
	}
</style>
<template>
	<div v-if="show">
		
	<header>
		<h2 class="topic_header">
			{{topic.title}}
		</h2>
		<div>
			<span>
				发布于 {{topic.create_at | fromNow}} 前
			</span>
			<span> 
				作者 {{topic.author ? topic.author.loginname : ''}}
			</span>
			<span>
				{{topic.visit_count}}次浏览
			</span>
			<span>
				来自{{topic.tab}}
			</span>
		</div>
	</header>
	<div class="markdown-body  topic_content">
		<div>{{{topic.content}}}</div>
	</div>
	<div class="comments">
		<div>{{getLength()}} 回复</div>
		<ul>
			<li v-for="reply in topic.replies" class="reply_block">
				<div>
					<img :src="reply.author.avatar_url" alt="" class="avatar">
					<span class="reply_msg">
						{{reply.author.loginname}} {{$index+1}}楼 回复 {{reply.create_at | fromNow}}以前
					</span>	
					
				</div>
				<div class="markdown-body">
					{{{reply.content}}}
				</div>
			</li>
		</ul>
	</div>
	</div>
</template>
<script>
	export default {
		data () {
			let vm = this
			return {
				topicId : 'transition.from.query',
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