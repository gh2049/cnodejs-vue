<template v-cloak>
	<div class="main-page">
		<img :src="user.avatar_url" alt="user.loginname" class="avatar">
		<p>{{user.score}}积分</p>
		<p><a href="javascript:;">收藏的话题</a></p>
		<p>主页</p>
		<p>地址</p>
		<p>github</p>
		<p>微博</p>
		<p>注册时间{{user.create_at | fromNow}} 前</p>
	</div>

	<div class="created">
		<div><span>最近创建的话题</span></div>
		<topiclist :topics="user.recent_topics"></topiclist>
	</div>

	<div class="replied">
		<div><span>最近回复的话题</span></div>
		<topiclist :topics="user.recent_replies"></topiclist>
	</div>
</template>
<script>
    import topiclist from "../components/topiclist";
	export default {
		data () {
			return {
				user : '',
				loginname : '',
				last_replies:''
			}
		},
/*		computed : {
			recent_topics : () => user && user.recent_topics.slice(0,5)|| [],
			recent_replies : () => user && user.recent_replies.slice(0,5)|| []
		},*/
		route : {
			data (transition) {
				let vm = this
				vm.loginname = transition.to.params.loginname
				this.$http.get('https://cnodejs.org/api/v1/user/'+this.loginname)
					.then (topicContent => {
						if(topicContent && topicContent.data){
	                		vm.user = topicContent.data.data
	                    }
	                    else{
	                        console.log('err',topicContent)
		    		    }
		    	})
            }
		},
		components : {topiclist}		
	}
</script>
<style>
	[v-cloak] {
	  display: none;
	}
</style>