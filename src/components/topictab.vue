<template>
	<div class="navtab ">
		<button @click="choose('all')">全部</button>
		<button @click="choose('good')">精华</button>
		<button @click="choose('share')">分享</button>
		<button @click="choose('ask')">问答</button>
		<button @click="choose('job')">招聘</button>
	</div>
</template>

<script>

	export default {
		data () {
			return {
				button: 'all'
			}
		},
		methods : {
			choose(val) {
				this.$dispatch('changeTab',val)
			}
		},

	}
</script>
<style lang="less" >
	.navtab {
		background :  #f6f6f6;
		button {

			width : 4vw;
			min-width : 40px;
			height : 2vw;
			min-height : 20px;
			border : none;
			border-radius: 13px;
			font-size : 0.8em;
			color : #fofofo;

		}
		:hover{
			cursor:pointer;
		}
	}
	
</style>